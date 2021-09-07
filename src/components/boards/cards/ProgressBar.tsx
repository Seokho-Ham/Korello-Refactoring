import React from 'react';
import styled from 'styled-components';

type ProgressBarProps = {
  percent: number;
};

const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <Container>
      <ProgressContent>{percent}%</ProgressContent>
      <ProgressBackground>
        <ProgressPercentBar percent={percent}></ProgressPercentBar>
      </ProgressBackground>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  padding: 0px 10px;
  margin: 6px 0px;
  display: flex;
`;
const ProgressContent = styled.div`
  display: inline-block;
  color: #5e6c84;
  font-size: 11px;
  margin-right: 5px;
`;
const ProgressBackground = styled.div`
  width: 490px;
  overflow: hidden;
  height: 8px;
  background-color: rgba(9, 30, 66, 0.08);
  border-radius: 50px;
`;
const ProgressPercentBar = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-color: #3333;
  transition: width 0.2s ease-in-out;
`;
