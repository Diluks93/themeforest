import React, { memo, useCallback, useState } from 'react';

import { Minus, Plus } from 'static';

import { Answer, Button, Question, QuestionBlock, TabStyled } from './styled';

function TabWithoutMemo({ question }: { question: string }) {
  const [isShowAnswer, showAnswer] = useState(false);

  const handleClick = useCallback(() => {
    showAnswer(!isShowAnswer);
  }, [isShowAnswer]);

  return (
    <TabStyled>
      <QuestionBlock>
        <Question $open={isShowAnswer}>{question}</Question>
        <Button $open={isShowAnswer} onClick={handleClick}>
          {isShowAnswer ? <Plus /> : <Minus />}
        </Button>
      </QuestionBlock>
      {isShowAnswer && (
        <Answer>
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
          imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
          tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis
          eros.
        </Answer>
      )}
    </TabStyled>
  );
}

export const Tab = memo(TabWithoutMemo);
