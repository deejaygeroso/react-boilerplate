import React, { ReactElement } from 'react';

interface SampleInterface {
  name: string;
}

const Sample = ({ name }: SampleInterface): ReactElement => <div>{name}</div>;

export default Sample;
