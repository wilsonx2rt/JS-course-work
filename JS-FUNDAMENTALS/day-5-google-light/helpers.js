
function checkStatus(response, pageToVisit) {
  console.log(`${pageToVisit}\n Status code: ${response.statusCode}`);
  return response.statusCode;
}


module.exports = {
  checkStatus : checkStatus,
}