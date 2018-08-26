import styled from "styled-components";
import logoPic from '../../statics/logo.png';

const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const styles = {
    HeaderWrapper,
    Logo
};

