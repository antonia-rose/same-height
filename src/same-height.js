/*global $, jQuery */

/**
 * set elements target in list to same height
 */

function sameHeight(list, target) {
    'use strict';

    var elements  = list.find(target),
        heights   = [],
        maxHeight = null;

    elements.each(function () {
        $(this).removeAttr('style');
        heights.push($(this).height());
    });
    maxHeight = Math.max.apply(null, heights);
    elements.height(maxHeight);
}