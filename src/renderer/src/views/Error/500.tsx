/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-31 20:17:34
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-31 20:22:00
 * @FilePath: \react-electron-admin\src\pages\Error\500.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import "./style/index.less";

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_URL);
	};
	return (
		<Result
			status="500"
			title="500"
			subTitle="Sorry, something went wrong."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotNetwork;
