/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-31 20:15:45
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-31 20:21:52
 * @FilePath: \react-electron-admin\src\pages\Error\404.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import "./style/index.less";

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_URL);
	};
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
