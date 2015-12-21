'use strict';
/*global $, jQuery */

/**
 * Set elements target in list to same height
 */
 $.fn.sameHeight = function(children) {
    var self = this;

    /**
     * Container element that contains children
     */
    this.container = this;

    /**
     * Children elements. If not given we just select all first level childs
     */
    this.children = (children) ? this.container.find(children) : this.container.find('> *');

    /**
     * Event to update the height of each children
     */
    this.container.bind('updateSize',function() {
        self._setHeight();
    });

    /**
     * Event to reset the height of each children
     */
    this.container.bind('destroySize',function() {
        self._removeHeight();
    });

    /**
     * Function to set the height of each children
     */
    this._setHeight = function() {
        var children  = this.children,
        heights   = [],
        maxHeight = null;

        children.each(function () {
            $(this).height('');
            heights.push($(this).innerHeight());
        });

        maxHeight = Math.max.apply(null, heights);
        children.height(maxHeight);
    };

    /**
     * Function to remove the height of each children
     */
    this._removeHeight = function() {
         this.children.height('');
    };

    /**
     * Trigger setHeight-function to set the height of each childrian initial
     */
    this._setHeight();

    return this;
};
