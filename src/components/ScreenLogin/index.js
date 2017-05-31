import React from 'react';

import LoginBox from './LoginBox';

export default ({login, pass, handleSubmitLogin}) => {
	return (
		<div>
			<LoginBox
        login={login}
        pass={pass}
        handleSubmitLogin={(e) => handleSubmitLogin(e)}/>
		</div>
	);
}
