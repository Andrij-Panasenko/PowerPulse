import sprite from '../../../assets/sprite.svg';
import { RawSvg } from '../ModalWellDone/ModaWellDone.styled';
import {
  DietBlock,
  DietTextBox,
  DietText,
  RecomendBox,
  RecomendStatusCircle,
  RecommendStatusText,
  AddBtn,
  DietNameBox,
  DietName,
  DietInfoList,
  DietInfoItem,
  DietInfoHeading,
  DietInfoValue,
} from './DietCard.styled';
export const DietCard = () => {
  return (
    <>
      <DietBlock>
        <DietTextBox>
          <DietText>Diet</DietText>
        </DietTextBox>
        <RecomendBox>
          <RecomendStatusCircle></RecomendStatusCircle>
          <RecommendStatusText>Recommended</RecommendStatusText>
          <AddBtn onClick={() => setModalProductsIsOpen(true)}>
            Add
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-red-raw'} />
            </svg>
          </AddBtn>
        </RecomendBox>
        <DietNameBox>
          <RawSvg width="24px" height="24px">
            <use xlinkHref={sprite + '#icon-running-man'} />
          </RawSvg>
          <DietName>Here will be name of diet</DietName>
        </DietNameBox>
        <DietInfoList>
          <DietInfoItem>
            <DietInfoHeading>Calories: </DietInfoHeading>
            <DietInfoValue>0</DietInfoValue>
          </DietInfoItem>
          <DietInfoItem>
            <DietInfoHeading>Category: </DietInfoHeading>
            <DietInfoValue>none</DietInfoValue>
          </DietInfoItem>
          <DietInfoItem>
            <DietInfoHeading>Weight: </DietInfoHeading>
            <DietInfoValue>0</DietInfoValue>
          </DietInfoItem>
        </DietInfoList>
      </DietBlock>
    </>
  );
};
