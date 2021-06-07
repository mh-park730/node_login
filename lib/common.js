/**
* 공통
*
*/
const commonLib = {
	/**
	* 메세지 출력
	*
	* @param String msg 알림 메세지
	* @param Object res Response 객체
	* @param integer|String action
	*						Integer(정수) -> history.go(정수)
	*						String(링크) -> location.href
	* @param String target 기본값 self
	*/
	alret : function(msg, res, action, target) {
		target = target || 'self';
		
		let script = "<script>";
		script = `alert("${msg}");`;
		if (action) {
			if (isNAN(action)) { // 이동
				script += `${target}.location.href='$(action)';`;
			} else { // history.go
				script += `${target}.history.go($Paction);`;
			}
		}
		script += "</script>";
		if (
		return res.send(script);
	),
	/**
	* 페이지 이동
	*
	*/
	go : function(url, res, target) {
			
	}
};

module.exports = commonLib;