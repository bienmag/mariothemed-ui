---
sidebar_position: 1
---

# Button

Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

<!-- :::tip My tip

    Use this awesome feature option

::: -->

<!-- :::danger Take care

    This action is dangerous

::: -->

### Import

:::tip run in the terminal

```
  import {MyButton} from 'tailwind-simba-ui'
```

:::

```
import {MyButton} from 'tailwind-simba-ui'
```

### Usage

<!-- insert button example here -->

```
<MyButton>Button<MyButton>
```

### Button Sizes

Use the size prop to change the size of the button. You can set the value to xs, sm, md, or lg.

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

### Button variants

Use the variant prop to change the visual style of the Button. You can set the value to solid, ghost, outline, or link.

```
<div>
  <MyButton variant='solid'>
    Button
  </MyButton>
  <MyButton variant='outline'>
    Button
  </MyButton>
  <MyButton variant='ghost'>
    Button
  </MyButton>
  <MyButton variant='link'>
    Button
  </MyButton>
</div>
```
