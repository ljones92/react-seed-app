import styled from '@emotion/styled/macro';

export const UserList = styled.div`
    max-width: 450px;
    padding: ${props => props.theme.spacing.medium}
        ${props => props.theme.spacing.large};
    background: ${props => props.theme.colours.white};
    margin: auto;
    border-radius: 8px;
    box-shadow: 5px 5px 10px grey;
`;

export const User = styled.div`
    font-size: ${props => props.theme.fontSize.xlarge};
    margin: ${props => props.theme.spacing.medium} 0;
`;

export const Highlight = styled.span`
    color: ${props => props.theme.colours.secondary};
`;

export const Placeholder = styled.div`
    font-size: ${props => props.theme.fontSize.large};
`;
