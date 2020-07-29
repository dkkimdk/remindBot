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
    input:string,
    name?: string,
  ) => {
    input = JSON.stringify(input);
    const stepFunctions = new AWS.StepFunctions({ region });
    const opts = {
      stateMachineArn,
      input,
      ...(name && {name})
    };
    try{
        const { executionArn } = await stepFunctions.startExecution(opts).promise();    
        return executionArn;
    } catch(error) {
        console.log(error);
        return error;
    }
  };


