import styled from '@emotion/styled/macro';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: linear-gradient(
        0deg,
        #dbdcd7 0,
        #dddcd7 14%,
        #e2c9cc 20%,
        #e7627d 46%,
        #b8235a 59%,
        #801357 71%,
        #3d1635 84%,
        #1c1a27
    );
`;

export const HeaderText = styled.div`
    margin: -${props => props.theme.spacing.xlarge} ${props =>
            props.theme.spacing.large} 0;
    font-size: ${props => props.theme.fontSize.huge};
    text-align: center;
    color: ${props => props.theme.colours.white};
`;
