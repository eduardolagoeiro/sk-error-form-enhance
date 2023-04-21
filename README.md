## Bug Report: enhanced form action error only shown with layout present

### Description

When submitting a form an error is thrown but it is only displayed when a layout is present. Without the layout, the error is not displayed unless the `use:enhance` option is removed.

### Steps to Reproduce

1. Create a form with use:enhance.
2. Submit the form.
3. If a layout is present, the error is displayed. If not, the error is not displayed unless `use:enhance` is removed.

### Expected Behavior

The error should be displayed regardless of whether a layout is present or `use:enhance` is used.

### Actual Behavior

The error is only displayed when a layout is present, or when `use:enhance` is removed.
