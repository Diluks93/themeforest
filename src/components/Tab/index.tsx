import React, { useState } from 'react';

import { Minus, Plus } from 'static';

import { Answer, Button, Question, QuestionBlock, TabStyled } from './styled';

export function Tab({ question }: { question: string }) {
  const [on, toggle] = useState(false);

  const handleClick = () => {
    toggle(!on);
  };

  return (
    <TabStyled onClick={handleClick}>
      <QuestionBlock>
        <Question $open={on}>{question}</Question>
        <Button $open={on}>{on ? <Plus /> : <Minus />}</Button>
      </QuestionBlock>
      {on && (
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
