import styled from '@emotion/styled/macro';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
    font-size: ${props => props.theme.fontSize.xxlarge};
    padding: ${props => props.theme.spacing.medium};
    margin-bottom: ${props => props.theme.spacing.large};
    border-radius: 8px;
    box-shadow: 5px 5px 10px grey;
    cursor: pointer;
    background: ${props => props.theme.colours.white};
    color: ${props => props.theme.colours.black};

    &:hover {
        box-shadow: 5px 5px 10px ${props => props.theme.colours.secondary};
    }

    &:focus {
        outline: 0;
    }
`;
