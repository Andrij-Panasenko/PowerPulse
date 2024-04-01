import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { HeadOfField } from '../HeadOfField.styled';
import {
  DairyExercisesField,
  ExerciseBlock,
  ExersLink,
  ExersTitle,
} from './DayExercises.styled';
import { useEffect } from 'react';

import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { NotFoundExercises } from '../NotFoundExercises/NotFoundExercises';
import { PositionCorrectorDiv } from '../NotFoundProducts/NotFoundProducts.styled';
import { fetchDiaryExercises } from '../../../redux/diary/operations';
import {
  selectDiaryExercises,
  selectIsLoading,
} from '../../../redux/diary/selectors';
import { Token } from '../../../redux/profile/selectors';
import { useMediaQuery } from '@mui/material';
import TableExercise from '../DairyDayExerciseForTabletAndDesktop/DairyDayExerciseForTabletAndDesktop';
import { Loader } from '../../Loader/Loader';
//
export const ExercisesTable = () => {
  const initialDate = useSelector((state) => state.diary.initialDate);
  const dispatch = useDispatch();
  const token = useSelector(Token);
  const isLoading = useSelector(selectIsLoading);

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    const request = {
      token,
      date: initialDate,
    };
    dispatch(fetchDiaryExercises(request));
  }, [dispatch, token, initialDate]);

  const exercises = useSelector(selectDiaryExercises);

  return (
    <DairyExercisesField>
      <HeadOfField>
        <ExersTitle>Exercises</ExersTitle>
        <ExersLink to="/exercises">Add exercise</ExersLink>
        <svg width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-red-raw'} />
        </svg>
      </HeadOfField>
      {isLoading ? (
        <Loader />
      ) : isMobileScreen ? (
        <>
          {exercises.length > 0 ? (
            <ExerciseBlock>
              {exercises.map((i) => (
                <ExerciseItem key={i.exerciseId._id} prop={i} />
              ))}
            </ExerciseBlock>
          ) : (
            <PositionCorrectorDiv>
              <NotFoundExercises />
            </PositionCorrectorDiv>
          )}
        </>
      ) : (
        <>
          {exercises.length > 0 ? (
            <>
              <TableExercise />
            </>
          ) : (
            <PositionCorrectorDiv>
              <NotFoundExercises />
            </PositionCorrectorDiv>
          )}
        </>
      )}
    </DairyExercisesField>
  );
};

export default ExercisesTable;
