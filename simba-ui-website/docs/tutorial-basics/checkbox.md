---
sidebar_position: 2
---

# Checkbox

Checkbox component is used in forms when a user needs to select multiple values from several options.

<!-- :::tip My tip

    Use this awesome feature option

:::

:::danger Take care

    This action is dangerous

::: -->

### Import

:::tip run in the terminal

```
import {MyCheckbox} from 'tailwind-simba-ui'
```

:::

### Usage

<!-- insert button example here -->

```
<MyCheckbox><MyCheckbox>
```

### Checkbox Sizes

Use the size prop to change the size of the button. You can set the value to xs, md, or lg.

<!-- insert button example here -->

```
<div>
  <MyButton size='xs'>
    Button
  </MyButton>
  <MyButton size='sm'>
    Button
  </MyButton>
  <MyButton size='md'>
    Button
  </MyButton>
  <MyButton size='lg'>
    Button
  </MyButton>
</div>
```

### Checkbox with custom color

You can override the color scheme of the Checkbox to green....and (add more colors to the package)

```
<div>
 <MyButton color='green'></MyButton>

</div>
```
