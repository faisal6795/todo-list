import styled from 'styled-components';
import { COLORS } from '../App.styles';

export const Container = styled.div`
    position: relative;
    padding: 1.25rem 1.25rem 0.75rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    margin-bottom: 1rem;
    display: inline-block;
    vertical-align: top;
    width: 100%;

    &.hide {
        display: none;
    }

    .edit-icon, .delete-icon {
        float: right;
        cursor: pointer;
        color: ${COLORS.primary};
        border: 1px solid ${COLORS.gray};
        border-radius: 50%;
        margin-left: 0.5rem;
    }

    .delete-icon {
        margin-right: -0.5rem;
    }

    .add-icon-small {
        padding: 0;
        font-size: 1rem;
        color: ${COLORS.primary};
        margin: 0 0.1rem;
    }

    .done-icon {
        border-radius: 50%;
        background-color: ${COLORS.primary};
        color: #fff;
        box-shadow: 0 3px 6px rgb(0 0 0 / 25%);
        cursor: pointer;
        float: right;
        font-weight: bold;
    }
`;

export const EditTitle = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    padding: 0;
`;

export const Title = styled.p`
    margin-top: 0;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const Body = styled.div`
    margin-bottom: 0.5rem;
`;

export const AddItem = styled.button`
    display: inline-flex;
    align-items: center;
    background: none;
    border: 0;
    outline: 0;
    padding: 0;
    margin-top: 0.5rem;
    cursor: pointer;

    span {
        font-size: 0.875rem;
        line-height: 1;
        color: ${COLORS.primary};
    }
`;