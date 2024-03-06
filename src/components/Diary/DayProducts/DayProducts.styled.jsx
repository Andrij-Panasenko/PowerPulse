import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListOfProducts = styled.ul`
  padding: 16px 0;
  overflow: scroll;
  max-height: 808px;
`;

export const HeaderOfProductField = styled.div`
  display: flex;
`;

export const DairyProductsField = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 16px 105px 194px 105px;
  width: 335px;
  min-height: 335px;
  max-height: 824px;
  /* display: flex; */
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;
  overflow: hidden;
  background: rgba(239, 237, 232, 0.05);
`;

export const ProductBlock = styled.div`
  display: flex;
`;

export const ProdLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${(props) => props.theme.colors.orange};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;