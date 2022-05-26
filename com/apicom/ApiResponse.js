
function Response(res, data = {}, status = 200, message){
  const response = {
    data,
    status,
    message,
    success: status == 200,
  }
  res.status(200).json(response)
}
function ApiResponse(res, data = {}, status = 200, message){
  return Response(res, data, status, message);
}

ApiResponse.failed = (res, message) => {
  return Response(res, {}, 400, message);
}

export default ApiResponse;
