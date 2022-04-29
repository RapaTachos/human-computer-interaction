/********************************************************************************************/
/********************************************************************************************/
/*******************************            COMMON             ******************************/
/********************************************************************************************/
/********************************************************************************************/

/************************************* COMMON COMPONENT VARIABLES AND PROPERTIES *************************************/
var _library = 'applewatch';
var _path = '/applewatch/';

/*******************************************************************************************/
/************************************* COMPONENT TYPES *************************************/
/*******************************************************************************************/

//TYPE: SIMPLE BUTTONS
prx.types.applewatch_button_small = {
    name: "applewatch_button_small"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var _subprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.subProperties,'props-text') : '';

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-button-simple '+prx.componentsHelper.getProp(item.buttonType,'button-type')+' '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .button-container { '+prx.utils.getBgCss(item.backgroundColor)+'; }';
        cR += '#' + _id + ' .button-body-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+_props+' }';
        cR += '#' + _id + ' .button-footnote-text { '+prx.componentsHelper.getProp(item.subtitleFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.subtitleColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.subtitleSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.subtitleAlign,'align')+'; '+_subprops+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="button-container liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        cR += '<span data-editableproperty="text" class="changeProperty-body button-body-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
        cR += '<span data-editableproperty="subtitle" class="changeProperty-footnote button-footnote-text liveUpdate-subtitleColor-color changeProperty-subtitleColor changeProperty-subtitleFont changeProperty-subtitleSize">' + prx.componentsHelper.getProp(item.subtitle,'text-textarea') + '</span>';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,interactions:[ prx.commonproperties.actions ]
       ,editableProperties: [
           prx.commonproperties.body_textarea,
           prx.commonproperties.footnote_textarea
       ]
       ,propertyGroups: [
           {
               caption: 'Style',
               properties: [
                   [
                       prx.commonproperties.backgroundColor
                   ]
               ]
           },
           {
            caption: 'Body',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'text', false, {propName: 'textFontStyle', caption: 'Body font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Body underline', useAsDynProp: false}),
                    prx.commonproperties.textColorRichText('color','text')
                ],
                [
                    prx.commonproperties.textAlignRichText('text-align','text')
                ]
            ]
        },
        {
            caption: 'Footnote',
            properties: [
                [
                    prx.commonproperties.textFontSubtitleRichText('font-family','subtitle')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'subtitle', false, {propName: 'subtitleFontStyle', caption: 'Footnote font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeSubtitleRichText('font-size','subtitle')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'subtitle', false, {propName: 'subtitleProperties', caption: 'Footnote underline', useAsDynProp: false}),
                    prx.commonproperties.textColorSubtitleRichText('color','subtitle')
                ],
                [
                    prx.commonproperties.textAlignSubtitleRichText('text-align','subtitle')
                ]
            ]
        }
       ]
}


//TYPE: COMPLEX BUTTONS
prx.types.applewatch_button_complex = {
    name: "applewatch_button_complex"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var _subprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.subProperties,'props-text') : '';

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-button-complex '+prx.componentsHelper.getProp(item.buttonType,'button-type')+' '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .button-container { '+prx.utils.getBgCss(item.backgroundColor)+'; }';
        cR += '#' + _id + ' .button-body-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+_props+' }';
        cR += '#' + _id + ' .button-footnote-text { '+prx.componentsHelper.getProp(item.subtitleFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.subtitleColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.subtitleSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.subtitleAlign,'align')+'; '+_subprops+' }';
        cR += '#' + _id + ' .button-left-icon, #' + _id + ' .button-right-icon, #' + _id + ' .button-right-icon1, #' + _id + ' .button-right-icon-big { background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
        if( typeof(item.imgSrc2) != 'undefined' ) {
        cR += '#' + _id + ' .button-right-icon2 { background-image: url('+prx.componentsHelper.getProp(item.imgSrc2,'asset')+'); }';
        }
        if( prx.componentsHelper.getProp(item.device,'other') == 'mm42') {
        cR += '#' + _id + ' .button-left-icon, #' + _id + ' .button-right-icon, #' + _id + ' .button-right-icon1, #' + _id + ' .button-right-icon2, #' + _id + ' .button-right-icon-big { height: '+(dims.height-((7.5*2)*prx.componentsHelper.getScale(item.lib)))+'px; }';
        }
        else if( prx.componentsHelper.getProp(item.device,'other') == 'mm38') {
        cR += '#' + _id + ' .button-left-icon, #' + _id + ' .button-right-icon, #' + _id + ' .button-right-icon1, #' + _id + ' .button-right-icon2, #' + _id + ' .button-right-icon-big { height: '+(dims.height-((7*2)*prx.componentsHelper.getScale(item.lib)))+'px; }';
        }
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="button-container liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        if( prx.componentsHelper.getProp(item.buttonType,'button-type') == 'icon-left' ) {
            cR += '<div class="button-left-icon"></div>';
        }

        cR += '<div class="button-text-container">';
        cR += '<span data-editableproperty="text" class="changeProperty-body button-body-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
        cR += '<span data-editableproperty="subtitle" class="changeProperty-footnote button-footnote-text liveUpdate-subtitleColor-color changeProperty-subtitleColor changeProperty-subtitleFont changeProperty-subtitleSize">' + prx.componentsHelper.getProp(item.subtitle,'text-textarea') + '</span>';
        cR += '</div>';

        if( prx.componentsHelper.getProp(item.buttonType,'button-type') == 'icon-right' ||
            prx.componentsHelper.getProp(item.buttonType,'button-type') == 'icons-right' ||
            prx.componentsHelper.getProp(item.buttonType,'button-type') == 'icon-big-right' ) {
            cR += '<div class="button-right-icons-container">';
            if( prx.componentsHelper.getProp(item.buttonType,'button-type') == 'icon-big-right' ) {
                cR += '<div class="button-right-icon-big"></div>';
            }
            else if( prx.componentsHelper.getProp(item.buttonType,'button-type') == 'icon-right' ) {
                cR += '<div class="button-right-icon"></div>';
            }
            else {
                cR += '<div class="button-right-icon2"></div>';
                cR += '<div class="button-right-icon1"></div>';
            }
            cR += '</div>';
        }

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,onResize: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        if( item.device == 'mm42') {
            $('#' + _id).find('.button-left-icon, .button-right-icon, .button-right-icon1, .button-right-icon2, .button-right-icon-big').css({
                'height': (dims.height-(7.5*prx.componentsHelper.getScale(item.lib)))+'px'
            });
        }
        else if( item.device == 'mm38') {
            $('#' + _id).find('.button-left-icon, .button-right-icon, .button-right-icon1, .button-right-icon2, .button-right-icon-big').css({
                'height': (dims.height-(7*prx.componentsHelper.getScale(item.lib)))+'px'
            });
        }

    }
    ,interactions:[ prx.commonproperties.actions ]
       ,editableProperties: [
           prx.commonproperties.body_textarea,
           prx.commonproperties.footnote_textarea
       ]
       ,propertyGroups: [
           {
               caption: 'Style',
               properties: [
                   [
                       prx.commonproperties.backgroundColor
                   ],
                   [
                    {
                        caption: false
                        ,name: 'buttonType'
                        ,type: 'select'
                        ,value: function(item,name,index) {
                            if(typeof(item.buttonType) == "undefined") {
                                item.buttonType = 'icon-left'
                            }
                            return item.buttonType;
                        }
                        ,values: [
                                  { value: 'no-icon', displayValue: 'No Icon'}
                                  ,{ value: 'icon-left', displayValue: 'Left Icon'}
                                  ,{ value: 'icon-right', displayValue: 'Right Icon' }
                                  ,{ value: 'icons-right', displayValue: 'Two Right Icons' }
                                  ,{ value: 'icon-big-right', displayValue: 'Big Right Icon'}
                        ],
                        onChange: function(item, index) {
                            switch(item.buttonType) {
                            case 'no-icon':
                                if( item.imgSrc.fileId == '' ) {
                                    item.imgSrc = {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"};
                                }
                                if( item.textAlign != 'center') { item.textAlign = 'center';}
                                $('#property-imgSrc').hide();
                                $('#property-imgSrc2').hide();
                                return item;
                                break;
                            case 'icon-left':
                                if( item.imgSrc.fileId == '' ) {
                                    item.imgSrc = {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"};
                                }
                                if( item.textAlign != 'left') { item.textAlign = 'left';}
                                $('#property-imgSrc2').hide();
                                return item;
                                break;
                            case 'icon-right':
                                if( item.imgSrc.fileId == '' ) {
                                    item.imgSrc = {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"};
                                }
                                if( item.textAlign != 'left') { item.textAlign = 'left';}
                                $('#property-imgSrc2').hide();
                                return item;
                                break;
                            case 'icons-right':
                                if( item.imgSrc.fileId == '' ) {
                                    item.imgSrc = {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"};
                                }
                                if( item.imgSrc2.fileId == '' ) {
                                    item.imgSrc2 = {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"};
                                }
                                if( item.textAlign != 'left') { item.textAlign = 'left';}
                                $('#property-imgSrc2').show();
                                return item;
                                break;
                            case 'icon-big-right':
                                if( item.imgSrc.fileId == '' ) {
                                    item.imgSrc = {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"};
                                }
                                if( item.textAlign != 'left') { item.textAlign = 'left';}
                                $('#property-imgSrc2').hide();
                                return item;
                                break;
                            default: break;
                            }
                            return false;
                        }
                        ,changeProperty: {
                            caption: 'Button type',
                            rerender: true
                        }
                    }
                   ]
               ]
           },
           {
            caption: 'Body',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'text', false, {propName: 'textFontStyle', caption: 'Body font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Body underline', useAsDynProp: false}),
                    prx.commonproperties.textColorRichText('color','text')
                ],
                [
                     prx.commonproperties.textAlignRichText('text-align','text')
                ]
            ]
        },
        {
            caption: 'Footnote',
            properties: [
                [
                    prx.commonproperties.textFontSubtitleRichText('font-family','subtitle')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'subtitle', false, {propName: 'subtitleFontStyle', caption: 'Footnote font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeSubtitleRichText('font-size','subtitle')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'subtitle', false, {propName: 'subtitleProperties', caption: 'Footnote underline', useAsDynProp: false}),
                    prx.commonproperties.textColorSubtitleRichText('color','subtitle')
                ],
                [
                    prx.commonproperties.textAlignSubtitleRichText('text-align','subtitle')
                ]
            ]
        },
        {
            caption: 'Icon',
            properties: [
                [
                    {
                        caption: false,
                        name: 'imgSrc',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.imgSrc.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,hiddenByDefault: function(item,name,index){
                            return item.buttonType == 'no-icon';
                        }
                        ,changeProperty: {
                              caption: 'Icon',
                              rerender: true
                          }
                    }
                ],
                [
                    {
                        caption: false,
                        name: 'imgSrc2',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc2.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.imgSrc2.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc2
                            });
                        }
                        ,hiddenByDefault: function(item,name,index){
                            return item.buttonType != 'icons-right';
                        }
                        ,changeProperty: {
                              caption: 'Second Icon',
                              rerender: true
                          }
                    }
                ]
            ]
        }
       ]
}

//TYPE: TABLE
prx.types.applewatch_table_complex = {
    name: "applewatch_table_complex"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var listItemH = (dims.height - ((item.listitems.length-1)*(4*prx.componentsHelper.getScale(item.lib))))/item.listitems.length;

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var _subprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.subProperties,'props-text') : '';


        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-table-complex '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .table-listitem { height: '+listItemH+'px; '+prx.utils.getBgCss(item.backgroundColor)+'; }';
        cR += '#' + _id + ' .button-body-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+_props+' }';
        cR += '#' + _id + ' .button-footnote-text { '+prx.componentsHelper.getProp(item.subtitleFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.subtitleColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.subtitleSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.subtitleAlign,'align-text')+'; '+_subprops+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="table-container">';

        $.each(item.listitems, function(i,elm){

            cR += '<style>';
            cR += '#' + _id + '-listitems-'+i+' .button-left-icon, #' + _id + '-listitems-'+i+' .button-right-icon, #' + _id + '-listitems-'+i+' .button-right-icon1, #' + _id + '-listitems-'+i+' .button-right-icon-big { background-image: url('+prx.componentsHelper.getProp(elm.imgSrc,'asset')+'); }';
            if( typeof(elm.imgSrc2) != 'undefined' ) {
            cR += '#' + _id + '-listitems-'+i+' .button-right-icon2 { background-image: url('+prx.componentsHelper.getProp(elm.imgSrc2,'asset')+'); }';
            }
            if( prx.componentsHelper.getProp(item.device,'other') == 'mm42') {
            cR += '#' + _id + ' .button-left-icon, #' + _id + ' .button-right-icon, #' + _id + ' .button-right-icon1, #' + _id + ' .button-right-icon2, #' + _id + ' .button-right-icon-big { height: '+(listItemH-((7.5*2)*prx.componentsHelper.getScale(item.lib)))+'px; }';
            }
            else if( prx.componentsHelper.getProp(item.device,'other') == 'mm38') {
            cR += '#' + _id + ' .button-left-icon, #' + _id + ' .button-right-icon, #' + _id + ' .button-right-icon1, #' + _id + ' .button-right-icon2, #' + _id + ' .button-right-icon-big { height: '+(listItemH-((7*2)*prx.componentsHelper.getScale(item.lib)))+'px; }';
            }
            cR += '</style>';

            cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property table-listitem '+((i==0) ? 'first ' : ' ')+'table-listitem-type-'+prx.componentsHelper.getProp(elm.buttonType,'button-type')+'" data-dynamic-property-index="'+i+'">';

            cR += '<div class="button-container liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

            if( prx.componentsHelper.getProp(elm.buttonType,'button-type') == 'icon-left' ) {
                cR += '<div class="button-left-icon"></div>';
            }

            cR += '<div class="button-text-container">';
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'" class="changeProperty-body button-body-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            cR += '<span data-editableproperty="subtitle" data-dynamic-property-index="'+i+'" class="changeProperty-footnote button-footnote-text liveUpdate-subtitleColor-color changeProperty-subtitleColor changeProperty-subtitleFont changeProperty-subtitleSize">' + prx.componentsHelper.getProp(elm.subtitle,'text-textarea') + '</span>';
            cR += '</div>';

            if( prx.componentsHelper.getProp(elm.buttonType,'button-type') == 'icon-right' ||
                prx.componentsHelper.getProp(elm.buttonType,'button-type') == 'icons-right' ||
                prx.componentsHelper.getProp(elm.buttonType,'button-type') == 'icon-big-right' ) {
                cR += '<div class="button-right-icons-container">';
                if( prx.componentsHelper.getProp(elm.buttonType,'button-type') == 'icon-big-right' ) {
                    cR += '<div class="button-right-icon-big"></div>';
                }
                else if( prx.componentsHelper.getProp(elm.buttonType,'button-type') == 'icon-right' ) {
                    cR += '<div class="button-right-icon"></div>';
                }
                else {
                    cR += '<div class="button-right-icon2"></div>';
                    cR += '<div class="button-right-icon1"></div>';
                }
                cR += '</div>';
            }

            cR += '</div>';
            cR += '</div>';
        });

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,onResize: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var listItemH = (dims.height - ((item.listitems.length-1)*(4*prx.componentsHelper.getScale(item.lib))))/item.listitems.length;

        $('#' + _id).find('.table-listitem').css({
            'height': listItemH+'px'
        });

        if( item.device == 'mm42') {
            $('#' + _id).find('.button-left-icon, .button-right-icon, .button-right-icon1, .button-right-icon2, .button-right-icon-big').css({
                'height': (listItemH-(7.5*prx.componentsHelper.getScale(item.lib)))+'px'
            });
        }
        else if( item.device == 'mm38') {
            $('#' + _id).find('.button-left-icon, .button-right-icon, .button-right-icon1, .button-right-icon2, .button-right-icon-big').css({
                'height': (listItemH-(7*prx.componentsHelper.getScale(item.lib)))+'px'
            });
        }

    }
       ,propertyGroups: [
           {
               caption: 'Style',
               properties: [
                   [
                       prx.commonproperties.backgroundColor
                   ]
               ]
           },
           {
            caption: 'Body',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','listitems.text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'listitems.text', false, {propName: 'textFontStyle', caption: 'Body font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','listitems.text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.text', false, {propName: 'textProperties', caption: 'Body underline', useAsDynProp: false}),
                    prx.commonproperties.textColorRichText('color','listitems.text')

                ],
                [
                    prx.commonproperties.textAlignRichText('text-align','listitems.text')
                ]
            ]
        },
        {
            caption: 'Footnote',
            properties: [
                [
                    prx.commonproperties.textFontSubtitleRichText('font-family','listitems.subtitle'),
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'listitems.subtitle', false, {propName: 'subtitleFontStyle', caption: 'Footnote font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeSubtitleRichText('font-size','listitems.subtitle')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.subtitle', false, {propName: 'subtitleProperties', caption: 'Footnote underline', useAsDynProp: false}),
                    prx.commonproperties.textColorSubtitleRichText('color','listitems.subtitle')
                ],
                [
                      prx.commonproperties.textAlignSubtitleRichText('text-align','listitems.subtitle')
                ]
            ]
        }
       ]
    ,dynamicProperties: {
        data: 'listitems'
        ,propertyCaption: 'Table rows'
          ,propertyName: 'Table row'
        ,addCaption: 'Add table row'
        ,deleteCaption: 'Delete'
        ,blankItem: {
            text: 'Button'
            ,buttonType: 'icon-left'
            ,subtitle: ''
            ,imgSrc: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"}
            ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
        ,captionProperty: 'text'
           ,editableProperties: [
               {
                   caption: 'Body',
                   name: 'text',
                   type: 'textarea',
                   value: function(item,name,index) {
                       return item.listitems[index].text;
                   },
                   changeProperty: {
                       caption: 'Body',
                       selector: '.changeProperty-body',
                       property: 'text',
                       transitionable: false
                   }
               },
               {
                       caption: 'Footnote',
                       name: 'subtitle',
                       proptype: 'text-2-subtitle',
                       type: 'textarea',
                       value: function(item,name,index) {
                           return item.listitems[index].subtitle;
                       },
                       changeProperty: {
                           caption: 'Footnote',
                           selector: '.changeProperty-footnote',
                           property: 'text',
                           transitionable: false
                       }
               }
           ]
        ,interactions:[ prx.commonproperties.actions_listitems ]
        ,propertyGroups: [
            {
                caption:  'Style',
                properties: [[
                    {
                        caption: false
                        ,name: 'buttonType'
                        ,type: 'select'
                        ,value: function(item,name,index) {
                            if(typeof(item.listitems[index].buttonType) == "undefined") {
                                item.listitems[index].buttonType = 'icon-left'
                            }
                            return item.listitems[index].buttonType;
                        }
                        ,values: [
                                  { value: 'icon-left', displayValue: 'Left Icon'}
                                  ,{ value: 'icon-right', displayValue: 'Right Icon' }
                                  ,{ value: 'icons-right', displayValue: 'Two Right Icons' }
                                  ,{ value: 'icon-big-right', displayValue: 'Big Right Icon'}
                        ],
                        onChange: function(item, index) {
                            switch(item.buttonType) {
                            case 'icon-left':
                                $('#property-imgSrc2').hide();
                                break;
                            case 'icon-right':
                                $('#property-imgSrc2').hide();
                                break;
                            case 'icons-right':
                                if( item.imgSrc2.fileId == '' ) {
                                    item.imgSrc2 = {"fileId":"c9863896c4c0169cf5645992ec762117.svg","name":"done.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/3b98d026e13f0cba528a8d0175564cbf.svg","targetSrc":"generated/c9863896c4c0169cf5645992ec762117_c6c6c6.svg","color":"C6C6C6"};
                                }
                                $('#property-imgSrc2').show();
                                return item;
                                break;
                            case 'icon-big-right':
                                $('#property-imgSrc2').hide();
                                break;
                            default: break;
                            }
                            return false;
                        }
                        ,changeProperty: {
                            caption: 'Button type',
                            rerender: true
                        }
                    }
                ]]
            },
            {
                caption: 'Icon',
                properties: [
                [
                    {
                        caption: false,
                        name: 'imgSrc',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name,index) {
                            if(item.listitems[index].imgSrc.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.listitems[index].imgSrc.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.listitems[index].imgSrc
                            });
                        }
                        ,changeProperty: {
                              caption: 'Icon',
                              rerender: true
                          }
                    }
                ],
                [
                    {
                        caption: false,
                        name: 'imgSrc2',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name,index) {
                            if(item.listitems[index].imgSrc2.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.listitems[index].imgSrc2.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.listitems[index].imgSrc2
                            });
                        }
                        ,hiddenByDefault: function(item,name,index){
                            return item.listitems[index].buttonType != 'icons-right';
                        }
                        ,changeProperty: {
                              caption: 'Second Icon',
                              rerender: true
                          }
                    }
                ]]
            }
        ]
    }
}

//TYPE: LABELS
prx.types.applewatch_label = {
    name: "applewatch_label"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-label '+prx.componentsHelper.getProp(item.labelType,'other')+' '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .label-container { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; text-align: '+prx.componentsHelper.getProp(item.textAlign,'align')+'; '+_props+' }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="label-container liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize">';

        cR += '<span data-editableproperty="text" class="changeProperty-text">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,interactions:[ prx.commonproperties.actions ]
       ,editableProperties: [
        prx.commonproperties.text_textarea
       ]
       ,propertyGroups: [
           {
               caption: 'Text',
               properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
               [
                   prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                   prx.commonproperties.textSizeRichText('font-size','text')
               ],
               [
                   prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false}),
                   prx.commonproperties.textColorRichText('color','text')
               ],
                [
                    prx.commonproperties.textAlignRichText('text-align','text')
                ]
               ]
           }
       ]
}

//TYPE: SLIDER
prx.types.applewatch_slider = {
    name: 'applewatch_slider'
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var cR = '';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-slider" data-step-value="'+((prx.componentsHelper.getProp(item.isDiscrete,'boolean')) ? item.step2 : item.step)+'">';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .slider-container { background-color: '+prx.componentsHelper.getProp(item.backgroundColor,'color-background')+'; }';
        cR += '#' + _id + ' .slider-icon-left { background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
        cR += '#' + _id + ' .slider-icon-right { background-image: url('+prx.componentsHelper.getProp(item.imgSrc2,'asset')+'); }';

        cR += '#' + _id + ' .slider-bar { height: '+prx.componentsHelper.getProp(item.barThickness,'num-other')+'px; background-color: '+prx.componentsHelper.getProp(item.barColor,'color-background')+'; border-radius: '+(2*prx.componentsHelper.getProp(item.barThickness,'border-radius'))+'; }'
        cR += '#' + _id + ' .slider-bar-filled { width: '+((prx.componentsHelper.getProp(item.step,'num-other')/prx.componentsHelper.getProp(item.steps,'num-other'))*100)+'%; background-color: '+prx.componentsHelper.getProp(item.fillBarColor,'color-fill')+'; border-radius: '+(2*(prx.componentsHelper.getProp(item.barThickness,'border-radius')))+'; }'
        cR += '#' + _id + ' .slider-bar-discrete { height: '+prx.componentsHelper.getProp(item.barThickness,'num-other')+'px; }';
        cR += '#' + _id + ' .slider-bar-discrete.active { background-color: '+prx.componentsHelper.getProp(item.fillBarColor,'color-background')+'; }';
        cR += '#' + _id + ' .slider-bar-discrete.inactive { background-color: '+prx.componentsHelper.getProp(item.barColor,'color-background')+';}';
        cR += '#' + _id + ' .slider-bar-discrete:first-child { border-radius: '+(2*(prx.componentsHelper.getProp(item.barThickness,'border-radius')))+' 0 0 '+(2*(prx.componentsHelper.getProp(item.barThickness,'border-radius')))+';}';
        cR += '#' + _id + ' .slider-bar-discrete:last-child { border-radius: 0 '+(2*(prx.componentsHelper.getProp(item.barThickness,'border-radius')))+' '+(2*(prx.componentsHelper.getProp(item.barThickness,'border-radius')))+' 0;}';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="slider-container liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        cR += '<div class="slider-icon-wrapper left">';
        cR += '<span class="slider-icon-left"></span>';
        cR += '</div>';

        cR += '<div class="slider-bar-wrapper">';

        if( prx.componentsHelper.getProp(item.isDiscrete,'boolean')) {
            for(i=0; i<prx.componentsHelper.getProp(item.steps,'num-other'); i++) {
                cR += '<div class="slider-bar-discrete slider-bar-'+i+' '+((i<prx.componentsHelper.getProp(item.step2,'num-other')) ? 'active liveUpdate-fillBarColor-background-color' : 'inactive liveUpdate-barColor-background-color')+'"></div>'
            }
        }
        else {
            cR += '<div class="slider-bar inactive liveUpdate-barColor-background-color">';
            cR += '<div class="slider-bar-filled active liveUpdate-fillBarColor-background-color"></div>'
            cR += '</div>';
        }

        cR += '</div>';

        cR += '<div class="slider-icon-wrapper right">';
        cR += '<span class="slider-icon-right"></span>';
        cR += '</div>';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,interactions: [ prx.commonproperties.actions ]
    ,mpactions: {
        specialEvents: ['slidervaluechange']
    }
    ,afterDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        if(!prx.editor) {

            if( prx.componentsHelper.getProp(item.isDiscrete,'boolean') ) {

                $('#'+_id).find('.slider-icon-wrapper.left').hammer({ domEvents: false }).on('tap', function() {

                    var stepChange = parseInt(document.getElementById(_id).getAttribute('data-step-value'));

                    if(!((stepChange - 1) < 0)) {
                        stepChange = stepChange - 1;
                        document.getElementById(_id).setAttribute('data-step-value', stepChange)

                        $('#'+_id).find('.slider-bar-discrete').removeClass('active inactive');

                        for(i=0; i<stepChange; i++) {
                            $('#'+_id).find('.slider-bar-'+(i)).addClass('active');
                        }
                        for(i=stepChange; i<item.steps; i++) {
                            $('#'+_id).find('.slider-bar-'+(i)).addClass('inactive');
                        }

                        if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                        prx.variables._triggerData['#'+_id]['slidervaluechange'] = { value: stepChange };

                        $('#'+_id).trigger('slidervaluechange');
                    }
                });

                $('#'+_id).find('.slider-icon-wrapper.right').hammer({ domEvents: false }).on('tap',function() {

                    var stepChange = parseInt(document.getElementById(_id).getAttribute('data-step-value'));

                    if(!((stepChange + 1) > item.steps)) {
                        stepChange = stepChange + 1;
                        document.getElementById(_id).setAttribute('data-step-value', stepChange)

                        $('#'+_id).find('.slider-bar-discrete').removeClass('active inactive');

                        for(i=0; i<stepChange; i++) {
                            $('#'+_id).find('.slider-bar-'+(i)).addClass('active');
                        }
                        for(i=stepChange; i<item.steps; i++) {
                            $('#'+_id).find('.slider-bar-'+(i)).addClass('inactive');
                        }

                        if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                        prx.variables._triggerData['#'+_id]['slidervaluechange'] = { value: stepChange };

                        $('#'+_id).trigger('slidervaluechange');
                    }
                });
            }
            else {

                $('#'+_id).find('.slider-icon-wrapper.left').hammer({ domEvents: false }).on('tap',function() {

                    var stepChange = parseInt(document.getElementById(_id).getAttribute('data-step-value'));

                    if(!((stepChange - 1) < 0)) {
                        stepChange = stepChange - 1;
                        document.getElementById(_id).setAttribute('data-step-value', stepChange)
                        $('#'+_id).find('.slider-bar-filled').css('width',(stepChange/item.steps)*100 + '%');

                        if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                        prx.variables._triggerData['#'+_id]['slidervaluechange'] = { value: stepChange };

                        $('#'+_id).trigger('slidervaluechange');
                    }
                });

                $('#'+_id).find('.slider-icon-wrapper.right').hammer({ domEvents: false }).on('tap',function() {

                    var stepChange = parseInt(document.getElementById(_id).getAttribute('data-step-value'));

                    if(!((stepChange + 1) > item.steps)) {
                        stepChange = stepChange + 1;
                        document.getElementById(_id).setAttribute('data-step-value', stepChange);
                        $('#'+_id).find('.slider-bar-filled').css('width',(stepChange/item.steps)*100 + '%');

                        if(typeof(prx.variables._triggerData['#'+_id]) == "undefined") { prx.variables._triggerData['#'+_id] = {}; }
                        prx.variables._triggerData['#'+_id]['slidervaluechange'] = { value: stepChange };

                        $('#'+_id).trigger('slidervaluechange');
                    }
                });
            }
            prx.actions.disableFlashActionOnItemTap('#' + _id + ' .slider-icon-wrapper', '.flashactiontap-afterdisplay');
        }
    }
    ,propertyGroups:	[
        {
            caption: 'Bar',
            properties: [
                [
                    {
                        caption: 'Color'
                        ,name: 'barColor'
                        ,proptype: 'background-color'
                        ,type: 'solid-colorpicker'
                        ,value: function(item,name) {
                            return item.barColor;
                        }
                        ,values: prx.comps.colors
                        ,liveUpdate:'background-color'
                          ,changeProperty: {
                            caption: 'Color',
                            property: 'background-color',
                            selector: '.inactive',
                            transitionable: true
                        }

                    },
                    {
                        caption: 'Fill Color'
                        ,name: 'fillBarColor'
                        ,proptype: 'background-color-2'
                        ,type: 'solid-colorpicker'
                        ,value: function(item,name) {
                            return item.fillBarColor;
                        }
                        ,values: prx.comps.colors
                        ,liveUpdate:'background-color'
                          ,changeProperty: {
                            caption: 'Fill Color',
                            property: 'background-color',
                            selector: '.active',
                            transitionable: true
                        }
                    }
                ]
            ]
        },{
            caption: 'Slider',
            properties: [
                [
                    {
                        caption: 'Number of Steps'
                        ,name: 'steps'
                        ,proptype: 'range'
                        ,type: 'combo-select'
                        ,value: function(item,name) {
                            return item.steps;
                        }
                        ,values: { min: 1, max: 10, step: 1 }
                        ,onChange: function(item) {

                            if( item.step > item.steps ) item.step = item.steps;
                            return item;
                        }
                        ,changeProperty: {
                            caption: 'Number of Steps',
                            rerender: true
                        }
                    }
                ],
                [
                    {
                        caption: 'Original Value'
                        ,name: 'step'
                        ,proptype: 'initial-value'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.step;
                        }
                        ,values: function(item,name) {
                            var steps = [];

                            for(i = 0; i <= item.steps; i++) {
                                steps.push({value: i, displayValue: i});
                            }

                            return steps;
                        }
                        ,hiddenByDefault: function(item,name) {
                            return item.isDiscrete;
                        }
                        ,changeProperty: {
                            caption: 'Discrete Original Value',
                            transitionable: false,
                            changeFunction: function(item, containerid) {
                                var _id = (!containerid) ? item.id : containerid+'-'+item.id;

                                document.getElementById(_id).setAttribute('data-step-value', item.step);

                                $('#'+_id).find('.slider-bar-filled').css('width',(item.step/item.steps)*100 + '%');
                            }
                        }
                    },
                    {
                        caption: 'Original Value'
                        ,name: 'step2'
                        ,proptype: 'initial-value'
                        ,type: 'select'
                        ,value: function(item,name) {
                            return item.step2;
                        }
                        ,values: function(item,name) {
                            var steps = [];

                            for(i = 0; i <= item.steps; i++) {
                                steps.push({value: i, displayValue: i});
                            }

                            return steps;
                        }
                        ,hiddenByDefault: function(item,name) {
                            return !item.isDiscrete;
                        }
                        ,changeProperty: {
                            caption: 'Continuous Original Value',
                            rerender: true
                        }
                    }
                ]
            ]
        },
        {
               caption: 'Icons',
               properties: [
                   [
                    {
                        caption: false,
                        name: 'imgSrc',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name,index) {
                            if(item.imgSrc.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.imgSrc.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,changeProperty: {
                              caption: 'Left Icon',
                              rerender: true
                          }
                    }
                ],
                [
                    {
                        caption: false,
                        name: 'imgSrc2',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name,index) {
                            if(item.imgSrc2.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.imgSrc2.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc2
                            });
                        }
                        ,changeProperty: {
                              caption: 'Right Icon',
                              rerender: true
                          }
                    }
                ]
               ]
           }
    ]
}

//TYPE: MAP
prx.types.applewatch_map = {
    name: "applewatch_map"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-map '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="map-container">';

        cR += '<img id="' + _id + '-img" src="'+prx.componentsHelper.getProp(item.imgSrc,'asset')+'">';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,interactions:[ prx.commonproperties.actions ]
       ,propertyGroups: [
        {
            caption: 'Image',
            properties: [
                [
                     {
                         caption: false
                        ,name: 'imgSrc'
                        ,type: 'combo-asset'
                        ,displayValue: function(item,name,index) {
                            if(typeof(item.imgSrc) == 'undefined' || item.imgSrc.fileId == '') {
                                return 'No thumbnail selected';
                            }
                            return item.imgSrc.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,changeProperty: {
                            caption: 'Map image',
                            rerender: true
                        }
                     }
                ]
            ]
        }
       ]
}

//TYPE: MENU
prx.types.applewatch_menu = {
    name: "applewatch_menu"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-menu '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .menu-container { '+prx.utils.getBgCss(item.backgroundColor)+'; }';
        if( item.listitems.length == 1 ) {
            cR += '#' + _id + ' .menu-listitem { width: 100%; height: 100%; }';
        }
        else if( item.listitems.length == 2 ) {
            cR += '#' + _id + ' .menu-listitem { width: 100%; height: 50%; }';
        }
        else {
            cR += '#' + _id + ' .menu-listitem { width: 50%; height: 50%; }';
            if( item.listitems.length == 3 ) {
                cR += '#' + _id + '-listitems-2 { width: 100% !important; }';
            }
        }
        cR += '#' + _id + ' .menu-item-container { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        if( item.listitems.length == 2 ) {
            cR += '#' + _id + ' .menu-item-container-0 { padding-top: '+(5*prx.componentsHelper.getScale(item.lib))+'px;}';
        }
        else if( item.listitems.length > 2 ) {
            cR += '#' + _id + ' .menu-item-container-0, #' + _id + ' .menu-item-container-1 { padding-top: '+(7*prx.componentsHelper.getScale(item.lib))+'px;}';
        }
        cR += '#' + _id + ' .menu-icon { '+prx.utils.getBgCss(item.itemColor)+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="menu-container liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        $.each(item.listitems, function(i,elm){

            cR += '<style>';
            cR += '#' + _id + '-listitems-'+i+' .menu-icon div { background-image: url('+prx.componentsHelper.getProp(elm.imgSrc,'asset')+'); }';
            cR += '</style>';

            cR += '<div id="'+_id+'-listitems-'+i+'" class="dynamic-property menu-listitem '+((i==0) ? 'first ' : ' ')+'" data-dynamic-property-index="'+i+'">';

            cR += '<div class="menu-item-container menu-item-container-'+i+'">';
            cR += '<div class="menu-icon menu-icon-'+i+' liveUpdate-itemColor-background-color changeProperty-itemColor"><div></div></div>'
            cR += '<span data-editableproperty="text" data-dynamic-property-index="'+i+'" class="changeProperty-label menu-icon-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize">' + prx.componentsHelper.getProp(elm.text,'text-textarea') + '</span>';
            cR += '</div>';

            cR += '</div>';
        });

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,propertyGroups: [
             {
                 caption: 'Style',
                 properties: [
                     [
                         prx.commonproperties.backgroundColor,
                         {
                            caption: false,
                            name: 'itemColor',
                            proptype: 'menu-item-color',
                            type: 'gradients-colorpicker',
                            value: function(item,name) {
                                return item.itemColor;
                            },
                            values: prx.comps.colors,
                            liveUpdate: 'background-color',
                            changeProperty: {
                                caption: 'Menu item color',
                                selector: '.changeProperty-itemColor',
                                property: 'background-color',
                                transitionable: true
                            }
                        }
                     ]
                 ]
             },
             {
                  caption: 'Body',
                  properties: [
                    [
                        prx.commonproperties.textFontRichText('font-family','listitems.text')
                    ],
                      [
                          prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'listitems.text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false})
                          ,prx.commonproperties.textSizeRichText('font-size','listitems.text')
                      ],
                    [
                        prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                        ,prx.commonproperties.textColorRichText('color','listitems.text')
                    ]
                  ]
              }
     ]
    ,dynamicProperties: {
        data: 'listitems'
        ,propertyCaption: 'Menu items'
          ,propertyName: 'Menu item'
        ,addCaption: 'Add menu item'
        ,deleteCaption: 'Delete'
        ,blankItem: {
            text: 'Label'
            ,imgSrc: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg"}
            ,actions: []
        }
        ,max: 4
        ,captionProperty: 'text'
        ,interactions:[ prx.commonproperties.actions_listitems ]
          ,editableProperties: [
                  {
                       caption: 'Label',
                       name: 'text',
                       type: 'textarea',
                       value: function(item, name, index) {
                           return item.listitems[index].text;
                       },
                       changeProperty: {
                           caption: 'Text',
                           selector: '.changeProperty-label',
                           property: 'text',
                           transitionable: false
                       }
                  }
              ]
        ,propertyGroups: [
              {
                  caption: 'Menu Items',
                  properties: [
                      [
                          {
                              caption: 'Icon',
                              name: 'imgSrc',
                              proptype: 'icon-source',
                              type: 'combo-asset',
                              displayValue: function(item,name,index) {
                                  if(item.listitems[index].imgSrc.fileId == '') {
                                      return 'No asset selected.';
                                  }
                                  return item.listitems[index].imgSrc.name;
                              }
                              ,value: function(item,name,index) {
                                  return JSON.stringify({
                                      allow: 'image',
                                      asset: item.listitems[index].imgSrc
                                  });
                              }
                              ,changeProperty: {
                                    caption: 'Icon',
                                    rerender: true
                                }
                          }
                      ]
                  ]
              }
         ]
    }
}

/*STATUSBAR */
prx.types.applewatch_statusbar = {
    name: "applewatch_statusbar"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item,symbol);

        var now = new Date();

        var hours = (now.getHours() % 12) ? (now.getHours() % 12) : 12;	// to get 12-hour format, and convert hour 0 to 12
        var mins = (now.getMinutes() < 10) ? ('0'+now.getMinutes()) : now.getMinutes();	// prepend 0 to minutes < 10
        var ampm = now.getHours() >= 12 ? 'PM' : 'AM';

        var cR = '';
        //cR += '<div id="'+_id+'" class="box pos type-applewatch-statusbar '+item.device+'" '+((item.overlay)? 'data-mpoverlay="1"': '')+'>';
        cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-statusbar '+prx.componentsHelper.getProp(item.device,'other')+'">';
        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .applewatch-statusbar-inner { '+prx.utils.getBgCss(item.backgroundColor)+'; }';
        cR += '#'+_id+' .applewatch-statusbar-time { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="applewatch-statusbar-inner liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        cR += '<div class="applewatch-statusbar-time" changeProperty-textFont changeProperty-textSize>'+(hours+':'+mins+' '+ampm)+'</div>';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';
        return cR;
    }
    ,propertyGroups: [
          {
              caption: 'Style',
              properties: [
                  [
                      prx.commonproperties.backgroundColor
                  ]
              ]
          },
          /*{
              caption: 'Advanced',
              properties: [[
                  {
                      caption: 'Position fixed on transitions'
                      ,name: 'overlay'
                      ,type: 'onoff'
                      ,value: function(item,name) {
                          if(typeof(item.overlay)=="undefined") {
                              return false;
                          }
                          return item.overlay;
                      }

                      ,changeProperty: {
                          caption: 'Position fixed',
                          rerender: true
                      }
                  }
              ]]
          }*/
      ]
}

/* TYPE: STATUSBAR TITLE */
prx.types.applewatch_statusbar_title = {
    name: "applewatch_statusbar_title"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item,symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var cR = '';
        cR += cR += '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-statusbar-title '+prx.componentsHelper.getProp(item.device,'other')+'" >';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#'+_id+' .statusbar-title-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';

        if( prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '' ) {
            cR += '#'+_id+' .statusbar-title-icon { background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
        }
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="statusbar-title-inner">';

        cR += '<div class="statusbar-title-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changePropert-textSize">';
        if( prx.componentsHelper.getProp(item.imgSrc.fileId,'other') != '' ) {
        cR += '<span class="statusbar-title-icon"></span>';
        }
        cR += '<span data-editableproperty="text" class="changeProperty-text">'+prx.componentsHelper.getProp(item.text,'text-textarea')+'</span>';
        cR += '</div>';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    },
    onResize: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item,symbol);

        if( typeof(item.imgSrc) != 'undefined' ) {

            $('#'+_id).find('.statusbar-title-icon').css('height', dims.height+'px');
        }

    },
    interactions: [ prx.commonproperties.actions ],
    editableProperties: [ prx.commonproperties.text],
    propertyGroups: [
        {
            caption: 'Text',
            properties: [
                [
                    prx.commonproperties.textFontRichText('font-family','text')
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'text', false, {propName: 'textFontStyle', caption: 'Text Font style', useAsDynProp: false}),
                    prx.commonproperties.textSizeRichText('font-size','text')
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', false, {propName: 'textProperties', caption: 'Underline', useAsDynProp: false})
                    ,prx.commonproperties.textColorRichText('color','text')
                ]
            ]
        },
        {
              caption: 'Icon',
              properties: [
                [
                    {
                        caption: false
                        ,name: 'imgSrc'
                        ,type: 'combo-asset'
                        ,displayValue: function(item,name,index) {
                            if(item.imgSrc.fileId == '') {
                                return 'No icon selected';
                            }
                            return item.imgSrc.name;
                        }
                        ,value: function(item,name,index) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,changeProperty: {
                            caption: 'Icon',
                            rerender: true
                         }
                    }
                ]
            ]
        }
    ]
}

//TYPE: NOTIFICATION
prx.types.applewatch_notification = {
    name: "applewatch_notification"
    ,onDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        var _props = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.textProperties,'props-text') : '';

        var _titleprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.titleProperties,'props-text') : '';

        var _nameprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.appnameProperties,'props-text') : '';

        var _btnprops = (typeof(prx.richtext)=='undefined') ? prx.componentsHelper.getProp(item.btnTextProperties,'props-text') : '';

        var cR = '<div id="' + _id + '" ' + prx.items.getComponentBaseAttributes(item, containerid, symbol)  + ' class="' + prx.items.getComponentBaseClasses(item, containerid, symbol) + ' box pos type-applewatch-notification '+prx.componentsHelper.getProp(item.device,'other')+'"> ';

        cR += '<style>';
        cR += prx.items.getComponentBaseStyle(item, containerid, symbol);
        cR += '#' + _id + ' .notification-container { '+prx.utils.getBgCss(item.backgroundColor)+'; }';
        cR += '#' + _id + ' .notification-text { '+prx.componentsHelper.getProp(item.textFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.textColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.textSize,'num-text-size')+'px; '+_props+' }';
        cR += '#' + _id + ' .notification-title { '+prx.componentsHelper.getProp(item.titleFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.titleColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.titleSize,'num-text-size')+'px; '+_titleprops+' }';
        cR += '#' + _id + ' .notification-app-name { '+prx.componentsHelper.getProp(item.appnameFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.appnameColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.appnameSize,'num-text-size')+'px; '+_nameprops+' }';
        cR += '#' + _id + ' .notification-app-bar { background-color: '+prx.componentsHelper.getProp(item.barColor,'color-background')+'; }';
        cR += '#' + _id + ' .notification-icon { background-color: '+prx.componentsHelper.getProp(item.iconColor,'color-background')+'; background-image: url('+prx.componentsHelper.getProp(item.imgSrc,'asset')+'); }';
        cR += '#' + _id + ' .notificationType-long .notification-content.long .notification-content-wrapper { background-color: '+prx.componentsHelper.getProp(item.notificationColor,'color-background')+'; }';
        cR += '#' + _id + ' .notificationType-long .button-body-text { '+prx.componentsHelper.getProp(item.btnTextFont,'font-family')+' color: '+prx.componentsHelper.getProp(item.btnTextColor,'color-text')+'; font-size: '+prx.componentsHelper.getProp(item.btnTextSize,'num-text-size')+'px; '+_btnprops+' }';
        cR += '#' + _id + ' .table-listitem { background-color: '+prx.componentsHelper.getProp(item.btnColor,'color-background')+'; }';
        cR += '</style>';
        cR += prx.items.getComponentPrependDivs(item, containerid, symbol);

        cR += '<div class="notification-container notificationType-'+prx.componentsHelper.getProp(item.notificationType,'other')+' liveUpdate-backgroundColor-background-color changeProperty-backgroundColor">';

        cR += '<div class="notification-content short">';
        cR += '<div class="notification-content-wrapper">';
        cR += '<span data-editableproperty="title" class="changeProperty-title notification-title liveUpdate-titleColor-color changeProperty-titleColor changeProperty-titleFont changeProperty-titleSize">' + prx.componentsHelper.getProp(item.title,'text-textarea') + '</span>';
        cR += '<span data-editableproperty="appname" class="changeProperty-appname notification-app-name liveUpdate-appnameColor-color changeProperty-appnameColor changeProperty-appnameFont changeProperty-appnameSize">' + prx.componentsHelper.getProp(item.appname,'text-textarea') + '</span>';
        cR += '</div>';
        cR += '</div>';

        cR += '<div class="notification-content long">';
        cR += '<div class="notification-content-wrapper liveUpdate-notificationColor-color changeProperty-notificationColor">';
        cR += '<span class="notification-app-bar liveUpdate-barColor-background-color changeProperty-barColor">';
        cR += '<span data-editableproperty="appname" class="changeProperty-appname notification-app-name changeProperty-appname liveUpdate-appnameColor-color changeProperty-appnameColor changeProperty-appnameFont changeProperty-appnameSize">' + prx.componentsHelper.getProp(item.appname,'text-textarea') + '</span>';
        cR += '</span>';
        cR += '<span data-editableproperty="title" class="changeProperty-title notification-title liveUpdate-titleColor-color changeProperty-titleColor changeProperty-titleFont changeProperty-titleSize">' + prx.componentsHelper.getProp(item.title,'text-textarea') + '</span>';
        cR += '<span data-editableproperty="text" class="changeProperty-text notification-text liveUpdate-textColor-color changeProperty-textColor changeProperty-textFont changeProperty-textSize">' + prx.componentsHelper.getProp(item.text,'text-textarea') + '</span>';
        cR += '</div>';

        cR += '<div class="button-wrapper">';

        $.each(item.listitems, function(i,elm){

            cR += '<div id="'+_id+'-listitems-'+i+'" class="liveUpdate-btnColor-color changeProperty-btnColor dynamic-property table-listitem '+((i==0) ? 'first' : '')+'" data-dynamic-property-index="'+i+'">';

            cR += '<div class="button-container">';

            cR += '<div class="button-text-container">';
            cR += '<span data-editableproperty="btnText" data-dynamic-property-index="'+i+'" class="changeProperty-btnText button-body-text liveUpdate-btnTextColor-color changeProperty-btnTextColor changeProperty-btnTextFont changeProperty-btnTextSize">' + prx.componentsHelper.getProp(elm.btnText,'text-textarea') + '</span>';
            cR += '</div>';

            cR += '</div>';
            cR += '</div>';
        });

        cR += '</div>';
        cR += '</div>';

        cR += '<div class="notification-icon liveUpdate-iconColor-background-color changeProperty-iconColor"></div>';

        cR += '</div>';
        cR += prx.items.getComponentAppendDivs(item, containerid, symbol);
        cR += '</div>';

        return cR;
    }
    ,afterDisplay: function(item,containerid,symbol) {

        var _id = (!containerid) ? item.id : containerid+'-'+item.id;
        var dims = prx.componentsHelper.getRealDims(item, symbol);

        if( !prx.editor ) {
            $('#' + _id + ' .notification-container').hammer().on('tap', function() {
                if( $(this).hasClass('notificationType-short') ) {
                    $(this).removeClass('notificationType-short').addClass('notificationType-long');
                }
            });

            prx.actions.disableFlashActionOnItemTap('#' + _id + ' .notification-container', '.flashactiontap-afterdisplay');
        }

    }
    ,interactions:[ prx.commonproperties.actions ]
       ,editableProperties: [
        {
            caption: 'App Name',
            name: 'appname',
            type: 'textarea',
            value: function(item, name) {
                return item.appname;
            },
            changeProperty: {
                caption: 'App Name',
                selector: '.changeProperty-appname',
                property: 'text',
                transitionable: false
            }
        },
        {
            caption: 'Title',
            name: 'title',
            type: 'textarea',
            value: function(item,name) {
                return item.title;
            },
            changeProperty: {
                caption: 'Title',
                selector: '.changeProperty-title',
                property: 'text',
                transitionable: false
            }
        },
        {
            caption: 'Text',
            name: 'text',
            type: 'textarea',
            value: function(item, name) {
                return item.text;
            },
            changeProperty: {
                caption: 'Text',
                selector: '.changeProperty-text',
                property: 'text',
                transitionable: false
            }
        }
       ]
       ,propertyGroups: [
          {
            caption: 'Style',
            properties: [
                [
                    prx.commonproperties.backgroundColor,
                    {
                        caption: 'Bar',
                        name: 'barColor',
                        proptype: 'bar-background-color',
                        type: 'gradients-colorpicker',
                        value: function(item,name) {
                            return item.barColor;
                        },
                        values: prx.comps.colors,
                        liveUpdate: 'background-color',
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Bar background color',
                            selector: '.changeProperty-barColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    },
                    {
                        caption: 'Content',
                        name: 'notificationColor',
                        proptype: 'notification-background-color',
                        type: 'gradients-colorpicker',
                        value: function(item,name) {
                            return item.notificationColor;
                        },
                        values: prx.comps.colors,
                        liveUpdate: 'background-color',
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Content background color',
                            selector: '.changeProperty-notificationColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
           {
               caption: 'Notification View',
               properties: [
                   [
                    {
                        caption: false
                        ,name: 'notificationType'
                        ,type: 'switcher'
                        ,value: function(item,name,index) {
                            if(typeof(item.notificationType) == "undefined") {
                                item.notificationType = 'short';
                            }
                            return item.notificationType;
                        }
                        ,values: [
                              { value: 'short', displayValue: '<span class="" title="Short View">Short</span>'},
                              { value: 'long', displayValue: '<span class="" title="Long View">Long</span>'}
                        ],
                        onChange: function(item, index) {
                            switch(item.notificationType) {
                            case "short":
                                $('#property-textFont,#property-textFontStyle,#property-textSize,#property-textColor,#property-textProperties').hide();
                                return item;
                                break;
                            case "long":
                                $('#property-textFont,#property-textFontStyle,#property-textSize,#property-textColor,#property-textProperties').show();
                                return item;
                                break;
                            default: break;
                            }
                            return false;
                        }
                        ,changeProperty: {
                            caption: 'Notification type',
                            selector: '.notification-container',
                            property: 'class',
                            transitionable: false
                        }
                    }
                ]
               ]
           },
           {
            caption: 'App Name Text',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'appnameFont',
                        proptype: 'font-family',
                        type: 'select',
                        relatedEditableProperties: 'appname',
                        relatedCSSProperties: 'font-family',
                        value: function(item, name) {
                            return item.appnameFont;
                        },
                        values: function() {
                            return prx.comps.fonts
                        },
                        changeProperty: {
                            caption: 'App Name font',
                            selector: '.changeProperty-appnameFont',
                            property: 'font-family',
                            transitionable: false
                        }
                    }
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'appname', false, {propName: 'appnameFontStyle', caption: 'App Name font style', useAsDynProp: false})
                    ,{
                        caption: false,
                        name: 'appnameSize',
                        proptype: 'font-size',
                        type: 'combo-select',
                        relatedEditableProperties: 'appname',
                        relatedCSSProperties: 'font-size',
                        value: function(item, name) {
                            return item.appnameSize;
                        },
                        values: prx.comps.textsize,
                        changeProperty: {
                            caption: 'App Name size',
                            selector: '.changeProperty-appnameSize',
                            property: 'font-size',
                            transitionable: true
                        }
                    }
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'appname', false, {propName: 'appnameProperties', caption: 'App Name underline', useAsDynProp: false}),
                    {
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'appnameColor',
                        proptype: 'font-color',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: 'appname',
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item, name) {
                            return item.appnameColor;
                        },
                        liveUpdate: 'color',
                        changeProperty: {
                            caption: 'App Name color',
                            selector: '.changeProperty-appnameColor',
                            property: 'color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Notification Title Text',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'titleFont',
                        proptype: 'font-family',
                        type: 'select',
                        relatedEditableProperties: 'title',
                        relatedCSSProperties: 'font-family',
                        value: function(item, name) {
                            return item.titleFont;
                        },
                        values: function() {
                            return prx.comps.fonts
                        },
                        changeProperty: {
                            caption: 'Notification Title font',
                            selector: '.changeProperty-titleFont',
                            property: 'font-family',
                            transitionable: false
                        }
                    }
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'title', false, {propName: 'titleFontStyle', caption: 'Notification Title font style', useAsDynProp: false})
                    ,{
                        caption: false,
                        name: 'titleSize',
                        proptype: 'font-size',
                        type: 'combo-select',
                        relatedEditableProperties: 'title',
                        relatedCSSProperties: 'font-size',
                        value: function(item, name) {
                            return item.titleSize;
                        },
                        values: prx.comps.textsize,
                        changeProperty: {
                            caption: 'Notification Title text size',
                            selector: '.changeProperty-titleSize',
                            property: 'font-size',
                            transitionable: true
                        }
                    }
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'title', false, {propName: 'titleProperties', caption: 'Notification Title underline', useAsDynProp: false}),
                    {
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'titleColor',
                        proptype: 'font-color',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: 'title',
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item, name) {
                            return item.titleColor;
                        },
                        liveUpdate: 'color',
                        changeProperty: {
                            caption: 'Notification Title color',
                            selector: '.changeProperty-titleColor',
                            property: 'color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Notification Content Text',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'textFont',
                        proptype: 'font-family',
                        type: 'select',
                        relatedEditableProperties: 'text',
                        relatedCSSProperties: 'font-family',
                        value: function(item, name) {
                            return item.textFont;
                        },
                        values: function() {
                            return prx.comps.fonts
                        },
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Text font',
                            selector: '.changeProperty-textFont',
                            property: 'font-family',
                            transitionable: false
                        }
                    }
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'text', function(item){ return item.notificationType == 'short'; }, {propName: 'textFontStyle', caption: 'Notification Text font style', useAsDynProp: false}),
                    {
                        caption: false,
                        name: 'textSize',
                        proptype: 'font-size',
                        type: 'combo-select',
                        relatedEditableProperties: 'text',
                        relatedCSSProperties: 'font-size',
                        value: function(item, name) {
                            return item.textSize;
                        },
                        values: prx.comps.textsize,
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Text text size',
                            selector: '.changeProperty-textSize',
                            property: 'font-size',
                            transitionable: true
                        }
                    }
                    ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'text', function(item){ return item.notificationType == 'short'; }, {propName: 'textProperties', caption: 'Notification underline', useAsDynProp: false}),
                    {
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'textColor',
                        proptype: 'font-color',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: 'text',
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item, name) {
                            return item.textColor;
                        },
                        liveUpdate: 'color',
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Text color',
                            selector: '.changeProperty-textColor',
                            property: 'color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'Notification Button Text',
            properties: [
                [
                    {
                        caption: { label: 'Font family', class: 'text-properties-label text-fontfamily-label' },
                        name: 'btnTextFont',
                        proptype: 'font-family',
                        type: 'select',
                        relatedEditableProperties: 'listitems.btnText',
                        relatedCSSProperties: 'font-family',
                        value: function(item, name) {
                            return item.btnTextFont;
                        },
                        values: function() {
                            return prx.comps.fonts
                        },
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Button Text font',
                            selector: '.changeProperty-btnTextFont',
                            property: 'font-family',
                            transitionable: false
                        }
                    }
                ],
                [
                    prx.commonproperties.textFontStyleRichText(['font-weight', 'font-style'],'listitems.btnText', function(item){ return item.notificationType == 'short'; }, {propName: 'btnTextFontStyle', caption: 'Notification Button Text font style', useAsDynProp: false})
                    ,{
                        caption: false,
                        name: 'btnTextSize',
                        proptype: 'font-size',
                        type: 'combo-select',
                        relatedEditableProperties: 'listitems.btnText',
                        relatedCSSProperties: 'font-size',
                        value: function(item, name) {
                            return item.btnTextSize;
                        },
                        values: prx.comps.textsize,
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Button Text text size',
                            selector: '.changeProperty-btnTextSize',
                            property: 'font-size',
                            transitionable: true
                        }
                    }
                ],
                [
                    prx.commonproperties.textPropertiesRichText(['font-weight','font-style','text-decoration'],'listitems.btnText', function(item){ return item.notificationType == 'short'; }, {propName: 'btnTextProperties', caption: 'Notification Button underline', useAsDynProp: false}),
                    {
                        caption: { label: 'Color', class: 'text-properties-label text-color-label' },
                        name: 'btnTextColor',
                        proptype: 'font-color',
                        type: 'solid-colorpicker',
                        relatedEditableProperties: 'listitems.btnText',
                        relatedCSSProperties: 'color',
                        pffSettings: prx.commonproperties.pffSettingsColor,
                        value: function(item, name) {
                            return item.btnTextColor;
                        },
                        liveUpdate: 'color',
                        hiddenByDefault: function(item,name){
                            return item.notificationType == 'short';
                        },
                        changeProperty: {
                            caption: 'Notification Button Text color',
                            selector: '.changeProperty-btnTextColor',
                            property: 'color',
                            transitionable: true
                        }
                    }
                ]
            ]
        },
        {
            caption: 'App Icon',
            properties: [
                [
                    {
                        caption: 'Background',
                        name: 'iconColor',
                        proptype: 'icon-background-color',
                        type: 'solid-colorpicker',
                        value: function(item,name) {
                            return item.iconColor;
                        },
                        values: prx.comps.colors,
                        liveUpdate: 'background-color',
                        changeProperty: {
                            caption: 'Icon background color',
                            selector: '.changeProperty-iconColor',
                            property: 'background-color',
                            transitionable: true
                        }
                    }
                ],
                [
                    {
                        caption: false,
                        name: 'imgSrc',
                        proptype: 'icon-source',
                        type: 'combo-asset',
                        displayValue: function(item,name) {
                            if(item.imgSrc.fileId == '') {
                                return 'No asset selected.';
                            }
                            return item.imgSrc.name;
                        }
                        ,value: function(item,name) {
                            return JSON.stringify({
                                allow: 'image',
                                asset: item.imgSrc
                            });
                        }
                        ,changeProperty: {
                              caption: 'Icon',
                              rerender: true
                          }
                    }
                ]
            ]
        }
       ]
       ,dynamicProperties: {
         data: 'listitems'
        ,propertyCaption: 'Notification buttons'
        ,propertyName: 'Notification button'
        ,addCaption: 'Add notification button'
        ,deleteCaption: 'Delete'
        ,blankItem: {
            btnText: 'Button'
            ,actions: []
        }
        ,max: 5
        ,captionProperty: 'btnText'
           ,editableProperties: [
               {
                   caption: 'Body',
                   name: 'btnText',
                   type: 'textarea',
                   value: function(item,name,index) {
                       return item.listitems[index].btnText;
                   },
                   changeProperty: {
                       caption: 'Body',
                       selector: '.changeProperty-btnText',
                       property: 'text',
                       transitionable: false
                   }
               }
           ]
        ,interactions:[ prx.commonproperties.actions_listitems ]
        ,hiddenByDefault: function(item,name){
            return item.notificationType == 'short';
        }
    }
}





/************************************************************************************************/
/************************************* COMPONENTS (OBJECTS) *************************************/
/************************************************************************************************/



/****** BUTTONS & TABLE ROWS ******/

//TYPE: FULL WIDTH BUTTON
prx.components.applewatch_button = {
    name: 'applewatch_button'
    ,type: 'applewatch_button'
    ,lib: _library
    ,caption: 'Full-width Button'
    ,icon: '-300px -600px'
    ,helper: prx.url.devices+ _path + 'button_full/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(242,244,252,0.14)'
    ,text: 'Button'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'center'
    ,textProperties: []
    ,subtitle: ''
    ,subtitleFont: 'San Francisco Compact Text'
    ,subtitleFontStyle: '400'
    ,subtitleSize: 13*prx.componentsHelper.getScale(_library)
    ,subtitleColor: 'rgb(174,180,191)'
    ,subtitleAlign: 'center'
    ,subtitleProperties: []
    ,buttonType: 'full'
    ,actions: []
    ,device: 'mm42'
};
/*prx.components.applewatch_button_38 = {
 name: 'applewatch_button_38'
 ,type: 'applewatch_button'
 ,lib: _library
 ,caption: 'Full-width Button (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'button_full_38/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 37.5*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(242,244,252,0.14)'
 ,text: 'Body'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 15*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'center'
 ,textProperties: []
 ,subtitle: ''
 ,subtitleFont: 'San Francisco Compact Text Regular'
 ,subtitleSize: 12*prx.componentsHelper.getScale(_library)
 ,subtitleColor: 'rgb(174,180,191)'
 ,subtitleAlign: 'center'
 ,subtitleProperties: []
 ,buttonType: 'full'
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: BUTTON
prx.components.applewatch_button_complex = {
    name: 'applewatch_button_complex'
    ,type: 'applewatch_button_complex'
    ,lib: _library
    ,caption: 'Button'
    ,icon: '-300px -600px'
    ,helper: prx.url.devices+ _path + 'button_complex/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(242,244,252,0.14)'
    ,text: 'Button'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'center'
    ,textProperties: []
    ,subtitle: ''
    ,subtitleFont: 'San Francisco Compact Text'
    ,subtitleFontStyle: '400'
    ,subtitleSize: 13*prx.componentsHelper.getScale(_library)
    ,subtitleColor: 'rgb(174,180,191)'
    ,subtitleAlign: 'center'
    ,subtitleProperties: []
    ,buttonType: 'no-icon'
    ,iconSize: 3
    ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
    ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
    ,actions: []
    ,device: 'mm42'
};
/*prx.components.applewatch_button_complex_38 = {
 name: 'applewatch_button_complex_38'
 ,type: 'applewatch_button_complex'
 ,lib: _library
 ,caption: 'Button (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'button_complex/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 37.5*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(242,244,252,0.14)'
 ,text: 'Body'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 15*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'center'
 ,textProperties: []
 ,subtitle: ''
 ,subtitleFont: 'San Francisco Compact Text Regular'
 ,subtitleSize: 12*prx.componentsHelper.getScale(_library)
 ,subtitleColor: 'rgb(174,180,191)'
 ,subtitleAlign: 'center'
 ,subtitleProperties: []
 ,buttonType: 'no-icon'
 ,iconSize: 3
 ,imgSrc: {"fileId":"","name":"","assetType":"icon","url":""}
 ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: SMALL BUTTON
prx.components.applewatch_button_small = {
    name: 'applewatch_button_small'
    ,type: 'applewatch_button_small'
    ,lib: _library
    ,caption: 'Small Button'
    ,icon: '-400px -600px'
    ,helper: prx.url.devices+ _path + 'button_small/helper.png'
    ,width: 76.5*prx.componentsHelper.getScale(_library)
    ,height: 32.5*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(242,244,252,0.2)'
    ,text: 'Button'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'center'
    ,textProperties: []
    ,subtitle: ''
    ,subtitleFont: 'San Francisco Compact Text'
    ,subtitleFontStyle: '400'
    ,subtitleSize: 13*prx.componentsHelper.getScale(_library)
    ,subtitleColor: 'rgb(174,180,191)'
    ,subtitleAlign: 'center'
    ,subtitleProperties: []
    ,buttonType: 'small'
    ,actions: []
    ,device: 'mm42'
};
/*prx.components.applewatch_button_small_38 = {
 name: 'applewatch_button_small_38'
 ,type: 'applewatch_button_small'
 ,lib: _library
 ,caption: 'Small Button (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'button_small_38/helper.png'
 ,width: 66*prx.componentsHelper.getScale(_library)
 ,height: 31*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(242,244,252,0.2)'
 ,text: 'Body'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 15*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'center'
 ,textProperties: []
 ,subtitle: ''
 ,subtitleFont: 'San Francisco Compact Text Regular'
 ,subtitleSize: 12*prx.componentsHelper.getScale(_library)
 ,subtitleColor: 'rgb(174,180,191)'
 ,subtitleAlign: 'center'
 ,subtitleProperties: []
 ,buttonType: 'small'
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: xSMALL BUTTON
prx.components.applewatch_button_xsmall = {
    name: 'applewatch_button_xsmall'
    ,type: 'applewatch_button_small'
    ,lib: _library
    ,caption: 'xSmall Button'
    ,icon: '-500px -600px'
    ,helper: prx.url.devices+ _path + 'button_xsmall/helper.png'
    ,width: 76.5*prx.componentsHelper.getScale(_library)
    ,height: 26.5*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(242,244,252,0.2)'
    ,text: 'Button'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'center'
    ,textProperties: []
    ,subtitle: ''
    ,subtitleFont: 'San Francisco Compact Text'
    ,subtitleFontStyle: '400'
    ,subtitleSize: 13*prx.componentsHelper.getScale(_library)
    ,subtitleColor: 'rgb(174,180,191)'
    ,subtitleAlign: 'center'
    ,subtitleProperties: []
    ,buttonType: 'xsmall'
    ,actions: []
    ,device: 'mm42'
};
/*prx.components.applewatch_button_xsmall_38 = {
 name: 'applewatch_button_xsmall_38'
 ,type: 'applewatch_button_small'
 ,lib: _library
 ,caption: 'xSmall Button (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'button_xsmall_38/helper.png'
 ,width: 66*prx.componentsHelper.getScale(_library)
 ,height: 25*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(242,244,252,0.2)'
 ,text: 'Body'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 15*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'center'
 ,textProperties: []
 ,subtitle: ''
 ,subtitleFont: 'San Francisco Compact Text Regular'
 ,subtitleSize: 12*prx.componentsHelper.getScale(_library)
 ,subtitleColor: 'rgb(174,180,191)'
 ,subtitleAlign: 'center'
 ,subtitleProperties: []
 ,buttonType: 'xsmall'
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: TABLE ROWS
prx.components.applewatch_table_complex = {
    name: 'applewatch_table_complex'
    ,type: 'applewatch_table_complex'
    ,lib: _library
    ,caption: 'Table Rows'
    ,icon: '-600px -600px'
    ,helper: prx.url.devices+ _path + 'table_complex/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 127.5*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(242,244,252,0.14)'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,subtitle: ''
    ,subtitleFont: 'San Francisco Compact Text'
    ,subtitleFontStyle: '400'
    ,subtitleSize: 13*prx.componentsHelper.getScale(_library)
    ,subtitleColor: 'rgb(174,180,191)'
    ,subtitleAlign: 'left'
    ,subtitleProperties: []
    ,iconSize: 3
    ,device: 'mm42'
    ,listitems: [
        {
            text: 'Button'
            ,buttonType: 'icon-left'
            ,subtitle: ''
            ,imgSrc: {"fileId":"e15a1c8db6de07dd76c19879e0d3d168.svg","name":"car2.svg","assetType":"icon","bucketsource":"static","url":"f1352447787435/cb7ab2793057d244a681e0bd37d66024.svg","targetSrc":"generated/e15a1c8db6de07dd76c19879e0d3d168_c6c6c6.svg","color":"c6c6c6"}
            ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        },
        {
            text: 'Button'
            ,buttonType: 'icon-left'
            ,subtitle: ''
            ,imgSrc: {"fileId":"a764f2746aa43431594a25b3e9d5dc34.svg","name":"star.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/94a90bf9a645dba63ad7a41d18f82ea7.svg","targetSrc":"generated/a764f2746aa43431594a25b3e9d5dc34_c6c6c6.svg","color":"C6C6C6"}
            ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        },
        {
            text: 'Button'
            ,buttonType: 'icon-left'
            ,subtitle: ''
            ,imgSrc: {"fileId":"2e041ec510cf6482c07145c64aa3cba5.svg","name":"lock.svg","assetType":"icon","bucketsource":"static","url":"f1424091456673/7d2cb8775b75d364b4ff72c9436eb577.svg","targetSrc":"generated/2e041ec510cf6482c07145c64aa3cba5_c6c6c6.svg","color":"C6C6C6"}
            ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
            ,actions: []
        }
    ]
    ,dynamicSizeExpand: 'v'
};
/*prx.components.applewatch_table_complex_38 = {
 name: 'applewatch_table_complex_38'
 ,type: 'applewatch_table_complex'
 ,lib: _library
 ,caption: 'Complex Table (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'table_complex/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 147*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(242,244,252,0.14)'
 ,text: 'Body'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 15*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'left'
 ,textProperties: []
 ,subtitle: ''
 ,subtitleFont: 'San Francisco Compact Text Regular'
 ,subtitleSize: 12*prx.componentsHelper.getScale(_library)
 ,subtitleColor: 'rgb(174,180,191)'
 ,subtitleAlign: 'left'
 ,subtitleProperties: []
 ,iconSize: 3
 ,device: 'mm42'
 ,listitems: [
 {
 text: 'Body'
 ,buttonType: 'icon-left'
 ,subtitle: ''
 ,imgSrc: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
 ,actions: []
 },
 {
 text: 'Body'
 ,buttonType: 'icons-right'
 ,subtitle: ''
 ,imgSrc: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,imgSrc2: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,actions: []
 },
 {
 text: 'Body'
 ,buttonType: 'icon-right'
 ,subtitle: ''
 ,imgSrc: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
 ,actions: []
 },
 {
 text: 'Body'
 ,buttonType: 'icon-big-right'
 ,subtitle: ''
 ,imgSrc: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,imgSrc2: {"fileId":"","name":"","assetType":"icon","url":""}
 ,actions: []
 }
 ]
 }*/



/****** LABELS ******/

//TYPE: HEADLINE LABEL
prx.components.applewatch_label_headline = {
    name: 'applewatch_label_headline'
    ,type: 'applewatch_label'
    ,lib: _library
    ,caption: 'Headline'
    ,icon: '-700px -600px'
    ,helper: prx.url.devices+ _path + 'label_headline/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 23*prx.componentsHelper.getScale(_library)
    ,text: 'Headline'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '600'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,labelType: 'full'
    ,actions: []
    ,device: 'mm42'
};

//TYPE: SUBHEAD LABEL
prx.components.applewatch_label_subhead = {
    name: 'applewatch_label_subhead'
    ,type: 'applewatch_label'
    ,lib: _library
    ,caption: 'Subhead'
    ,icon: '-800px -600px'
    ,helper: prx.url.devices+ _path + 'label_subhead/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 23*prx.componentsHelper.getScale(_library)
    ,text: 'Subhead'
    ,textFont: 'San Francisco Compact Display'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,labelType: 'full'
    ,actions: []
    ,device: 'mm42'
};

//TYPE: BODY LABEL
prx.components.applewatch_label = {
    name: 'applewatch_label'
    ,type: 'applewatch_label'
    ,lib: _library
    ,caption: 'Body'
    ,icon: '-900px -600px'
    ,helper: prx.url.devices+ _path + 'label/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 23*prx.componentsHelper.getScale(_library)
    ,text: 'Body'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,labelType: 'full'
    ,actions: []
    ,device: 'mm42'
};
/*prx.components.applewatch_label_38 = {
 name: 'applewatch_label_38'
 ,type: 'applewatch_label'
 ,lib: _library
 ,caption: 'Label (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'label_38/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 21*prx.componentsHelper.getScale(_library)
 ,text: 'Body'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 15*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'left'
 ,textProperties: []
 ,labelType: 'full'
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: CAPTION 1 LABEL
prx.components.applewatch_label_caption1 = {
    name: 'applewatch_label_caption1'
    ,type: 'applewatch_label'
    ,lib: _library
    ,caption: 'Caption 1'
    ,icon: '-1000px -600px'
    ,helper: prx.url.devices+ _path + 'label_caption1/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 23*prx.componentsHelper.getScale(_library)
    ,text: 'Caption 1'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 15*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,labelType: 'full'
    ,actions: []
    ,device: 'mm42'
};

//TYPE: CAPTION 2 LABEL
prx.components.applewatch_label_caption2 = {
    name: 'applewatch_label_caption2'
    ,type: 'applewatch_label'
    ,lib: _library
    ,caption: 'Caption 2'
    ,icon: '-1100px -600px'
    ,helper: prx.url.devices+ _path + 'label_caption2/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 23*prx.componentsHelper.getScale(_library)
    ,text: 'Caption 2'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,labelType: 'full'
    ,actions: []
    ,device: 'mm42'
};

//TYPE: FOOTNOTE LABEL
prx.components.applewatch_label_footnote = {
    name: 'applewatch_label_footnote'
    ,type: 'applewatch_label'
    ,lib: _library
    ,caption: 'Footnote'
    ,icon: '-1200px -600px'
    ,helper: prx.url.devices+ _path + 'label_footnote/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 23*prx.componentsHelper.getScale(_library)
    ,text: 'Footnote'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 13*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'left'
    ,textProperties: []
    ,labelType: 'full'
    ,actions: []
    ,device: 'mm42'
};



/****** SLIDERS ******/

//TYPE: CONTINUOUS SLIDER
prx.components.applewatch_slider = {
    name: 'applewatch_slider'
    ,type: 'applewatch_slider'
    ,lib: _library
    ,caption: 'Continuous Slider'
    ,icon: '-1300px -600px'
    ,helper: prx.url.devices+_path + 'slider_continuous/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,barThickness: 4*prx.componentsHelper.getScale(_library)
    ,steps: 10
    ,step: 1
    ,step2: 1
    ,backgroundColor: 'rgba(242,244,252,0.14)'
    ,barColor: '003333'
    ,fillBarColor: '00cc66'
    ,imgSrc: {"fileId":"48c2355f857a82b5f8c580421e6dce24.svg","name":"minus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c031bffe1343c0f58f80762c31ea6633.svg","targetSrc":"generated/48c2355f857a82b5f8c580421e6dce24_c6c6c6.svg","color":"C6C6C6"}
    ,imgSrc2: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
    ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
    ,isDiscrete: false
    ,device: 'mm42'
};
/*prx.components.applewatch_slider_38 = {
 name: 'applewatch_slider_38'
 ,type: 'applewatch_slider'
 ,lib: _library
 ,caption: 'Continuous Slider (38)'
 ,icon: '-560px -1440px'
 ,helper: prx.url.devices+_path + 'slider_continuous_38/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 37.5*prx.componentsHelper.getScale(_library)
 ,resizable : true
 ,barThickness: 4*prx.componentsHelper.getScale(_library)
 ,steps: 10
 ,step: 1
 ,step2: 1
 ,backgroundColor: 'rgba(242,244,252,0.14)'
 ,barColor: '003333'
 ,fillBarColor: '00cc66'
 ,imgSrc: {"fileId":"48c2355f857a82b5f8c580421e6dce24.svg","name":"minus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c031bffe1343c0f58f80762c31ea6633.svg","targetSrc":"generated/48c2355f857a82b5f8c580421e6dce24_c6c6c6.svg","color":"C6C6C6"}
 ,imgSrc2: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
 ,isDiscrete: false
 ,device: 'mm38'
 }*/

//TYPE: DISCRETE SLIDER
prx.components.applewatch_slider_discrete = {
    name: 'applewatch_slider_discrete'
    ,type: 'applewatch_slider'
    ,lib: _library
    ,caption: 'Discrete Slider'
    ,icon: '-1400px -600px'
    ,helper: prx.url.devices+_path + 'slider_discrete/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 40*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,textColor: 'ffffff'
    ,textSize: 12*prx.componentsHelper.getScale(_library)
    ,barThickness: 4*prx.componentsHelper.getScale(_library)
    ,steps: 10
    ,step: 1
    ,step2: 1
    ,backgroundColor: 'rgba(242,244,252,0.14)'
    ,barColor: '003333'
    ,fillBarColor: '00cc66'
    ,imgSrc: {"fileId":"48c2355f857a82b5f8c580421e6dce24.svg","name":"minus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c031bffe1343c0f58f80762c31ea6633.svg","targetSrc":"generated/48c2355f857a82b5f8c580421e6dce24_c6c6c6.svg","color":"C6C6C6"}
    ,imgSrc2: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
    ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
    ,isDiscrete: true
    ,device: 'mm42'
};
/*prx.components.applewatch_slider_discrete_38 = {
 name: 'applewatch_slider_discrete_38'
 ,type: 'applewatch_slider'
 ,lib: _library
 ,caption: 'Discrete Slider (38)'
 ,icon: '-640px -1440px'
 ,helper: prx.url.devices+_path + 'slider_discrete_38/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 37.5*prx.componentsHelper.getScale(_library)
 ,resizable : true
 ,textColor: 'ffffff'
 ,textSize: 12*prx.componentsHelper.getScale(_library)
 ,barThickness: 4*prx.componentsHelper.getScale(_library)
 ,steps: 10
 ,step: 1
 ,step2: 1
 ,backgroundColor: 'rgba(242,244,252,0.14)'
 ,barColor: '003333'
 ,fillBarColor: '00cc66'
 ,imgSrc: {"fileId":"48c2355f857a82b5f8c580421e6dce24.svg","name":"minus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/c031bffe1343c0f58f80762c31ea6633.svg","targetSrc":"generated/48c2355f857a82b5f8c580421e6dce24_c6c6c6.svg","color":"C6C6C6"}
 ,imgSrc2: {"fileId":"9f51e6dd9adaacbc69eb39a3b11e2069.svg","name":"plus.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/558b9ee9b4a9123e4df38f815f297650.svg","targetSrc":"generated/9f51e6dd9adaacbc69eb39a3b11e2069_c6c6c6.svg","color":"C6C6C6"}
 ,properties: "v,l,o,hpos,vpos,w,h,dr,f,ds"
 ,isDiscrete: true
 ,device: 'mm38'
 }*/


/****** OTHER ******/

//TYPE: STATUSBAR TITLE
prx.components.applewatch_statusbar_title = {
    name: 'applewatch_statusbar_title'
    ,type: 'applewatch_statusbar_title'
    ,lib: _library
    ,caption: 'Statusbar Title'
    ,icon: '-1500px -600px'
    ,helper: prx.url.devices+_path + 'statusbar_title/helper.png'
    ,width: 50*prx.componentsHelper.getScale(_library)
    ,height: 19*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,text: 'Title'
    ,textFont: 'San Francisco Compact Display'
    ,textFontStyle: '400'
    ,textSize: 16*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(109,109,109)'
    ,textProperties: []
    ,imgSrc: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_888d99.svg","color":"888d99"}
    ,device: 'mm42'
};
/*prx.components.applewatch_statusbar_title_38 = {
 name: 'applewatch_statusbar_title_38'
 ,type: 'applewatch_statusbar_title'
 ,lib: _library
 ,caption: 'Statusbar Title (38)'
 ,icon: '-640px -960px'
 ,helper: prx.url.devices+_path + 'statusbar_title_38/helper.png'
 ,width: 50*prx.componentsHelper.getScale(_library)
 ,height: 19*prx.componentsHelper.getScale(_library)
 ,resizable : true
 ,text: 'Label'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 13*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(109,109,109)'
 ,textProperties: []
 ,imgSrc: {"fileId":"c0877fc419aa836a4097f4f982a53a59.svg","name":"chevron-left.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/b0a2a6e58cba73da2d0b8dc3e0ac8fe8.svg","targetSrc":"generated/c0877fc419aa836a4097f4f982a53a59_888d99.svg","color":"888d99"}
 ,device: 'mm38'
 }*/

//TYPE: STATUSBAR
prx.components.applewatch_statusbar = {
    name: 'applewatch_statusbar'
    ,type: 'applewatch_statusbar'
    ,lib: _library
    ,caption: 'Statusbar'
    ,icon: '-1600px -600px'
    ,helper: prx.url.devices+_path+ 'statusbar/helper.png'
    ,width: "full"
    ,height: 19*prx.componentsHelper.getScale(_library)
    ,backgroundColor: '#000000'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 14*prx.componentsHelper.getScale(_library)
    ,resizable : true
    ,overlay: false
    ,device: 'mm42'
};
/*prx.components.applewatch_statusbar_38 = {
 name: 'applewatch_statusbar_38'
 ,type: 'applewatch_statusbar'
 ,lib: _library
 ,caption: 'Statusbar (38)'
 ,icon: '-400px -1680px'
 ,helper: prx.url.devices+_path+ 'statusbar_38/helper.png'
 ,width: "full"
 ,height: 19*prx.componentsHelper.getScale(_library)
 ,backgroundColor: '#000000'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 13*prx.componentsHelper.getScale(_library)
 ,resizable : true
 ,overlay: false
 ,device: 'mm38'
 }*/

//TYPE: MAP
prx.components.applewatch_map = {
    name: 'applewatch_map'
    ,type: 'applewatch_map'
    ,lib: _library
    ,caption: 'Map'
    ,icon: '-1700px -600px'
    ,helper: prx.url.devices+ _path + 'map/helper.png'
    ,width: 154*prx.componentsHelper.getScale(_library)
    ,height: 170*prx.componentsHelper.getScale(_library)
    ,imgSrc: {"fileId":"6376f5c300f0984765ffebc83d2166ee.png","assetType":"gallery","bucketsource":"static","name":" san-francisco-map.png", "url":"f1353077251107/6376f5c300f0984765ffebc83d2166ee.png"}
    ,actions: []
    ,device: 'mm42'
};
/*prx.components.applewatch_map_38 = {
 name: 'applewatch_map_38'
 ,type: 'applewatch_map'
 ,lib: _library
 ,caption: 'Map 	(38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'map/helper.png'
 ,width: 134*prx.componentsHelper.getScale(_library)
 ,height: 147*prx.componentsHelper.getScale(_library)
 ,imgSrc: {"fileId":"6376f5c300f0984765ffebc83d2166ee.png","assetType":"gallery","bucketsource":"static","name":" san-francisco-map.png","url":"f1353077251107/6376f5c300f0984765ffebc83d2166ee.png"}
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: MENU
prx.components.applewatch_menu = {
    name: 'applewatch_menu'
    ,type: 'applewatch_menu'
    ,lib: _library
    ,caption: 'Menu'
    ,icon: '-1800px -600px'
    ,helper: prx.url.devices+ _path + 'menu/helper.png'
    ,width: 'full'
    ,height: 195*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(0,0,0,0.55)'
    ,itemColor: 'rgba(242,244,252,0.5)'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400'
    ,textSize: 13*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'center'
    ,textProperties: []
    ,menuType: 4
    ,device: 'mm42'
    ,listitems: [
        {
            text: 'Label 1'
            ,imgSrc: {"fileId":"3675df9efa1b3f45e83ad2d66a71d7d9.svg","name":"wtr-bsuncloud.svg","assetType":"icon","bucketsource":"static","url":"f1352393672138/467c0741aac2dcda5a976074fb849bb0.svg"}
            ,actions: []
        },
        {
            text: 'Label 2'
            ,imgSrc: {"fileId":"9451008bc6ceb2b5b597c13910a1aeac.svg","name":"umbrella.svg","assetType":"icon","bucketsource":"static","url":"f1352393672138/1d1730c0a40b16a8f57d818e6223fa69.svg"}
            ,actions: []
        },
        {
            text: 'Label 3'
            ,imgSrc: {"fileId":"aecc1e000485b9d562de8421df605e70.svg","name":"wtr-fahrenheit.svg","assetType":"icon","bucketsource":"static","url":"f1352449754654/499f0a2d0065dcf306607ee2de98a3e0.svg"}
            ,actions: []
        },
        {
            text: 'Label 4'
            ,imgSrc: {"fileId":"0fbd01b0d7ec7df38c6b654f562068ee.svg","name":"wtr-fog01.svg","assetType":"icon","bucketsource":"static","url":"f1352449754654/5c2766dabf4bd7b6fc68429d40c50117.svg"}
            ,actions: []
        }
    ]
};
/*prx.components.applewatch_menu_38 = {
 name: 'applewatch_menu_38'
 ,type: 'applewatch_menu'
 ,lib: _library
 ,caption: 'Menu (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'menu_38/helper.png'
 ,width: 'full'
 ,height: 170*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(0,0,0,0.55)'
 ,itemColor: 'rgba(242,244,252,0.8)'
 ,text1: 'Label 1'
 ,text2: 'Label 2'
 ,text3: 'Label 3'
 ,text4: 'Label 4'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 12*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'center'
 ,textProperties: []
 ,menuType: 4
 ,imgSrc: {"fileId":"3675df9efa1b3f45e83ad2d66a71d7d9.svg","name":"wtr-bsuncloud.svg","assetType":"icon","bucketsource":"static","url":"f1352393672138/467c0741aac2dcda5a976074fb849bb0.svg"}
 ,imgSrc2: {"fileId":"9451008bc6ceb2b5b597c13910a1aeac.svg","name":"umbrella.svg","assetType":"icon","bucketsource":"static","url":"f1352393672138/1d1730c0a40b16a8f57d818e6223fa69.svg"}
 ,imgSrc3: {"fileId":"aecc1e000485b9d562de8421df605e70.svg","name":"wtr-fahrenheit.svg","assetType":"icon","bucketsource":"static","url":"f1352449754654/499f0a2d0065dcf306607ee2de98a3e0.svg"}
 ,imgSrc4: {"fileId":"0fbd01b0d7ec7df38c6b654f562068ee.svg","name":"wtr-fog01.svg","assetType":"icon","bucketsource":"static","url":"f1352449754654/5c2766dabf4bd7b6fc68429d40c50117.svg"}
 ,actions: []
 ,device: 'mm38'
 }*/

//TYPE: NOTIFICATION
prx.components.applewatch_notification = {
    name: 'applewatch_notification'
    ,type: 'applewatch_notification'
    ,lib: _library
    ,caption: 'Notification'
    ,icon: '-1900px -600px'
    ,helper: prx.url.devices+ _path + 'notification/helper.png'
    ,width: 'full'
    ,height: 195*prx.componentsHelper.getScale(_library)
    ,backgroundColor: 'rgba(0,0,0,0.9)'
    ,notificationColor: 'rgba(242,244,252,0.14)'
    ,barColor: 'rgba(242,244,252,0.2)'
    ,iconColor: 'F8F9FA'
    ,appname: 'APP NAME'
    ,appnameFont: 'San Francisco Compact Text'
    ,appnameFontStyle: '400'//1
    ,appnameSize: 13*prx.componentsHelper.getScale(_library)
    ,appnameColor: 'rgb(255,255,255)'
    ,appnameAlign: 'center'
    ,appnameProperties: []
    ,title: 'Notification Title'
    ,titleFont: 'San Francisco Compact Text'
    ,titleFontStyle: '400' //2
    ,titleSize: 16*prx.componentsHelper.getScale(_library)
    ,titleColor: 'rgb(255,255,255)'
    ,titleAlign: 'center'
    ,titleProperties: []
    ,text: 'Main notification text'
    ,textFont: 'San Francisco Compact Text'
    ,textFontStyle: '400' //3
    ,textSize: 12*prx.componentsHelper.getScale(_library)
    ,textColor: 'rgb(255,255,255)'
    ,textAlign: 'center'
    ,textProperties: []
    ,btnTextFont: 'San Francisco Compact Text'
    ,btnTextFontStyle: '400' //4
    ,btnTextSize: 16*prx.componentsHelper.getScale(_library)
    ,btnTextColor: 'rgb(255,255,255)'
    ,btnTextAlign: 'center'
    ,btnTextProperties: []
    ,notificationType: 'short'
    ,imgSrc: {"fileId":"aac69ca20d90665f9b88e1fe1c04337b.svg","name":"protoio2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/aac69ca20d90665f9b88e1fe1c04337b.svg","targetSrc":"generated/aac69ca20d90665f9b88e1fe1c04337b_35a7c1.svg","color":"35A7C1"}
    ,actions: []
    ,device: 'mm42'
    ,listitems: [
        {
            btnText: 'Accept'
            ,actions: []
        },
        {
            btnText: 'Dismiss'
            ,actions: []
        }
    ]
};
/*prx.components.applewatch_notification_38 = {
 name: 'applewatch_notification_38'
 ,type: 'applewatch_notification'
 ,lib: _library
 ,caption: 'Notification (38)'
 ,icon: '-160px -1360px'
 ,helper: prx.url.devices+ _path + 'notification_38/helper.png'
 ,width: 'full'
 ,height: 170*prx.componentsHelper.getScale(_library)
 ,backgroundColor: 'rgba(0,0,0,0.8)'
 ,notificationColor: 'rgba(242,244,252,0.2)'
 ,barColor: 'rgba(242,244,252,0.14)'
 ,iconColor: 'F8F9FA'
 ,appname: 'APP NAME'
 ,appnameFont: 'San Francisco Compact Text Regular'
 ,appnameSize: 12*prx.componentsHelper.getScale(_library)
 ,appnameColor: 'rgb(255,255,255)'
 ,appnameAlign: 'center'
 ,appnameProperties: []
 ,title: 'Notification Title'
 ,titleFont: 'San Francisco Compact Text Regular'
 ,titleSize: 15*prx.componentsHelper.getScale(_library)
 ,titleColor: 'rgb(255,255,255)'
 ,titleAlign: 'center'
 ,titleProperties: []
 ,text: 'Main notification text'
 ,textFont: 'San Francisco Compact Text Regular'
 ,textSize: 11*prx.componentsHelper.getScale(_library)
 ,textColor: 'rgb(255,255,255)'
 ,textAlign: 'center'
 ,textProperties: []
 ,notificationType: 'short'
 ,imgSrc: {"fileId":"aac69ca20d90665f9b88e1fe1c04337b.svg","name":"protoio2.svg","assetType":"icon","bucketsource":"static","url":"f1352971179296/aac69ca20d90665f9b88e1fe1c04337b.svg","targetSrc":"generated/aac69ca20d90665f9b88e1fe1c04337b_35a7c1.svg","color":"35A7C1"}
 ,actions: []
 ,device: 'mm38'
 }*/
