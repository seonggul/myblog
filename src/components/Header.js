import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignJustify,
	faSearch,
	faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

const Top = () => {
	return (
		<Header>
			<Web>
				<div>
					<div>
						<FontAwesomeIcon icon={faDumbbell} />
					</div>
				</div>
			</Web>
			<Mobile>
				<div>
					<input></input> <FontAwesomeIcon icon={faSearch} />
				</div>
				<FontAwesomeIcon icon={faAlignJustify} />
			</Mobile>
		</Header>
	);
};

export default Top;

const Header = styled.header`
	width: 100%, 
    height: 50px,
`;

const Web = styled.div`
	@media screen and (max-width: 1051px) {
		display: none;
	}
`;
const Mobile = styled.div`
	@media screen and (min-width: 1050px) {
		display: none;
	}
`;
