import AWS from 'aws-sdk';

export const getExecutions = async (
    region: string,
    stateMachineArn: string,
    statusFilter?: string,
  ) => {
    const stepFunctions = new AWS.StepFunctions({ region });
    const opts = {
      maxResults: 10,
      stateMachineArn,
      ...(statusFilter && { statusFilter }),
    };
    try{ 
        const { executions } = await stepFunctions.listExecutions(opts).promise();    
        return executions;
    } catch(error) {
        console.log(error);
        return error;
    }
  };

  export const startExecution = async (
    region: string,
    stateMachineArn: string,
    requestBody:string,
    datetime: Date,
  ) => {
    
    const payload= {
      input: requestBody,
      time: new Date(datetime).toISOString()
    }

    const input = JSON.stringify(payload);
    const stepFunctions = new AWS.StepFunctions({ region });
    const opts = {
      stateMachineArn,
      input
    };
    try{
        const { executionArn } = await stepFunctions.startExecution(opts).promise();    
        return executionArn;
    } catch(error) {
        return error;
    }
  };


