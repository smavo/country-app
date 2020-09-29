import React from 'react'
import Wrapper from "./wrapper";

import styled from "styled-components";
import RegionFilter from "./RegionFilter";
import NameFilter from "./NameFilter";

const ActionListStyled = styled.div`
    .row {
        display: grid;
        grid-gap: 2.5em 0;
        margin-bottom: 2.5em;
    }
    @media screen and (min-width: 768px) {
        .row {
        grid-template-columns: 480px 200px;
        justify-content: space-between;
        margin-bottom: 3em;
        }
    }
`;

function ActionList() {
    return (
        <>
            <ActionListStyled>
                <Wrapper>
                    <div className="row">
                        <NameFilter />
                        <RegionFilter />
                    </div>
                </Wrapper>
            </ActionListStyled>
        </>
    )
}

export default ActionList;