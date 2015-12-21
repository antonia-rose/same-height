# same-height
This short jQuery plugin sets all elements in a list to the biggest calculated height

## Usage
```javascript
$('.target').sameHeight('.children');
```
This sets all `.children` to same height in `.container`.

## Events
```javascript
$('.target').trigger('EVENT');
```

After the plugin has been bound to the element it delivers some events:

| Event | Description |
|-------------|-------------|
|updateSize |recalculates the height of each children (like initial call)|
|destroySize |remove the height of each children|
