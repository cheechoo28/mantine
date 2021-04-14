import React from 'react';
import { Checkbox } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<Checkbox
 ${props}
/>`;

export function CheckboxConfigurator() {
  return (
    <Configurator
      component={(props: any) => <Checkbox {...props} defaultChecked />}
      codeTemplate={codeTemplate}
      multiline
      props={[
        {
          name: 'label',
          type: 'string',
          initialValue: 'I agree to sell my privacy',
        },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
        { name: 'intermediate', type: 'boolean', initialValue: false, defaultValue: false },
      ]}
    />
  );
}
