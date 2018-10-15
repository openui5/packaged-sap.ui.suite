sap.ui.require.preload({
	"sap/ui/suite/library.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/core/Core\",\"sap/ui/core/library\"],function(e){\"use strict\";sap.ui.getCore().initLibrary({name:\"sap.ui.suite\",version:\"1.58.4\",dependencies:[\"sap.ui.core\"],types:[\"sap.ui.suite.TaskCircleColor\"],interfaces:[],controls:[\"sap.ui.suite.TaskCircle\",\"sap.ui.suite.VerticalProgressIndicator\"],elements:[]});var i=sap.ui.suite;return i.TaskCircleColor={Red:\"Red\",Yellow:\"Yellow\",Green:\"Green\",Gray:\"Gray\"},i});",
	"sap/ui/suite/QuickViewUtils.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/thirdparty/jquery\",\"sap/ui/core/Control\",\"sap/ui/core/Element\"],function(t,e,i){\"use strict\";var n={createQuickView:function(t,e,i,n){var r=new sap.ui.model.odata.ODataModel(t,!1),u=new sap.ui.ux3.QuickView({firstTitle:\"{title}\",firstTitleHref:\"{titleLinkURL}\",type:\"{Thing/text}\",icon:\"{imageURL}\"});u.setModel(r),u.bindObject(\"/QuickviewConfigs(name='\"+e+\"',thingKey='\"+i+\"')\",{expand:\"Thing,QVAttributes/Attribute,QVActions/Action\"});var s=new o;return s.bindAggregation(\"items\",{path:\"QVAttributes\",factory:function(t,e){var i=new a(t,{label:\"{Attribute/label}\",link:\"{valueLinkURL}\",order:\"{order}\"});return i.bindProperty(\"value\",\"value\",n&&n[e.getProperty(\"Attribute/name\")]),i}}),u.addContent(s),u},createQuickViewData:function(t,e,i,n,r){var u=new sap.ui.model.odata.ODataModel(e,!1);t.removeAllContent(),t.setModel(u),t.bindProperty(\"firstTitle\",\"title\"),t.bindProperty(\"firstTitleHref\",\"titleLinkURL\"),t.bindProperty(\"type\",\"Thing/text\"),t.bindProperty(\"icon\",\"imageURL\"),t.bindObject(\"/QuickviewConfigs(name='\"+i+\"',thingKey='\"+n+\"')\",{expand:\"Thing,QVAttributes/Attribute,QVActions/Action\"});var s=new o;s.bindAggregation(\"items\",{path:\"QVAttributes\",factory:function(t,e){var i=new a(t,{label:\"{Attribute/label}\",link:\"{valueLinkURL}\",order:\"{order}\"});return i.bindProperty(\"value\",\"value\",r&&r[e.getProperty(\"Attribute/name\")]),i}}),t.addContent(s)},createDataSetQuickView:function(t,e,i,n,a){var o=new sap.ui.model.odata.ODataModel(t,!1);a&&o.setSizeLimit(a);var r=new sap.ui.ux3.QuickView({type:i,showActionBar:!1});return r.setModel(o),r.addContent(this._createDSContent(r,e,n)),r},createDataSetQuickViewData:function(t,e,i,n,a,o){var r=new sap.ui.model.odata.ODataModel(e,!1);o&&r.setSizeLimit(o),t.removeAllContent(),t.setType(n),t.setShowActionBar(!1),t.setModel(r),t.addContent(this._createDSContent(t,i,a))},_createDSContent:function(e,i,n){var a=new sap.ui.commons.layout.MatrixLayout,o=new sap.ui.commons.layout.MatrixLayoutRow;return t.each(n,function(t,e){var i;i=e.href?new sap.ui.commons.Link({text:e.value,href:e.href}):new sap.ui.commons.TextView({text:e.value});var n=new sap.ui.commons.layout.MatrixLayoutCell({content:[i]});n.addStyleClass(\"quickViewDS\"),o.addCell(n)}),a.bindAggregation(\"rows\",i,o),a}},a=i.extend(\"sap.ui.suite.hcm.QvItem\",{metadata:{properties:{label:\"string\",value:\"string\",link:\"string\",order:\"string\",type:\"string\"}}}),o=e.extend(\"sap.ui.suite.hcm.QvContent\",{metadata:{aggregations:{items:{type:\"sap.ui.suite.hcm.QvItem\",multiple:!0}}},init:function(){this._sorted=!1},exit:function(){this._oML&&this._oML.destroy()},renderer:function(t,e){t.write(\"<div\"),t.writeControlData(e),t.write(\">\"),t.renderControl(e._createQVContent(e)),t.write(\"</div>\")},_createQVContent:function(t){var e,i,n,a,o,r=new sap.ui.commons.layout.MatrixLayout({widths:[\"75px\"]}),u=t.getItems();this._oML&&this._oML.destroy(),t._sortItems(t);for(var s=0;s<u.length;s++)e=new sap.ui.commons.layout.MatrixLayoutRow,i=new sap.ui.commons.layout.MatrixLayoutCell({vAlign:\"Top\"}),n=new sap.ui.commons.Label({text:u[s].getLabel()+\":\"}),i.addContent(n),e.addCell(i),i=new sap.ui.commons.layout.MatrixLayoutCell,u[s].getLink()?(o=new sap.ui.commons.Link({text:u[s].getValue(),href:u[s].getLink()}),i.addContent(o)):(a=new sap.ui.commons.TextView({text:u[s].getValue()}),i.addContent(a)),e.addCell(i),r.addRow(e);return this._oML=r,r},_sortItems:function(e){if(!e._sorted){var i=e.removeAllAggregation(\"items\",!0);i.sort(function(t,e){return parseInt(t.getOrder(),10)-parseInt(e.getOrder(),10)}),t.each(i,function(t,i){e.addAggregation(\"items\",i,!1)}),e._sorted=!0}}});return n},!0);",
	"sap/ui/suite/TaskCircle.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/core/Control\",\"sap/ui/core/EnabledPropagator\",\"./library\",\"./TaskCircleRenderer\"],function(e,a,i,r){\"use strict\";var t=i.TaskCircleColor,o=e.extend(\"sap.ui.suite.TaskCircle\",{metadata:{library:\"sap.ui.suite\",properties:{value:{type:\"int\",group:\"Misc\",defaultValue:0},maxValue:{type:\"int\",group:\"Misc\",defaultValue:100},minValue:{type:\"int\",group:\"Misc\",defaultValue:0},color:{type:\"sap.ui.suite.TaskCircleColor\",group:\"Misc\",defaultValue:t.Gray}},associations:{ariaLabelledBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaLabelledBy\"},ariaDescribedBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaDescribedBy\"}},events:{press:{}}}});return a.call(o.prototype),o.prototype.init=function(){},o.prototype.onclick=function(e){this.firePress({}),e.preventDefault(),e.stopPropagation()},o.prototype.focus=function(){var e=this.getDomRef();e&&e.focus()},o});",
	"sap/ui/suite/TaskCircleRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/core/Core\",\"./library\"],function(e,t){\"use strict\";var r=t.TaskCircleColor,i=function(){};return i.render=function(e,t){var i=e,a=t.getMinValue(),s=t.getMaxValue(),l=t.getValue();(a<0||a==Number.NaN)&&(a=0),(s<0||s==Number.NaN)&&(s=1),(l<0||l==Number.NaN)&&(l=0);var o=l.toString(),c=\"sapUiTaskCircleColorGray\";switch(t.getColor()){case r.Red:c=\"sapUiTaskCircleColorRed\";break;case r.Yellow:c=\"sapUiTaskCircleColorYellow\";break;case r.Green:c=\"sapUiTaskCircleColorGreen\";break;case r.Gray:c=\"sapUiTaskCircleColorGray\"}l<a&&(a=l),l>s&&(s=l);var d=24;a>10&&(d=32),a>100&&(d=46);var n=parseInt(Math.sqrt((l-a)/(s-a)*(3844-d*d)+d*d),10),u=(l+\"\").length,p=.55*n;u>1&&(p=n/u),i.write(\"<div\"),i.writeControlData(t),i.writeAttribute(\"tabIndex\",\"0\"),t.getTooltip_AsString()?i.writeAttributeEscaped(\"title\",t.getTooltip_AsString()):i.writeAttributeEscaped(\"title\",o),sap.ui.getCore().getConfiguration().getAccessibility()&&(i.writeAttribute(\"role\",\"progressbar\"),i.writeAccessibilityState(t,{valuemin:a}),i.writeAccessibilityState(t,{valuemax:s}),i.writeAccessibilityState(t,{valuenow:l})),i.writeAttribute(\"class\",\"sapUiTaskCircle \"+c),i.addStyle(\"width\",n+\"px\"),i.addStyle(\"height\",n+\"px\"),i.addStyle(\"line-height\",n+\"px\"),i.addStyle(\"font-size\",parseInt(p,10)+\"px\"),i.addStyle(\"border-radius\",n+\"px\"),i.addStyle(\"-moz-border-radius\",n+\"px\"),i.writeClasses(),i.writeStyles(),i.write(\">\"),i.write(l),i.write(\"</div>\")},i},!0);",
	"sap/ui/suite/VerticalProgressIndicator.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"sap/ui/thirdparty/jquery\",\"sap/ui/core/Control\",\"sap/ui/core/EnabledPropagator\",\"./library\",\"./VerticalProgressIndicatorRenderer\"],function(e,t,r,i,a){\"use strict\";var s=t.extend(\"sap.ui.suite.VerticalProgressIndicator\",{metadata:{library:\"sap.ui.suite\",properties:{percentage:{type:\"int\",group:\"Misc\",defaultValue:null}},associations:{ariaLabelledBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaLabelledBy\"},ariaDescribedBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaDescribedBy\"}},events:{press:{}}}});return r.call(s.prototype),s.prototype.setPercentage=function(t){var r=this.getPercentage();if(r==t)return this;this.oBar=window.document.getElementById(this.getId()+\"-bar\"),((r=t)<0||r==Number.NaN)&&(r=0),r>100&&(r=100);var i=Math.round(58*r/100),a=58-i;return this.setProperty(\"percentage\",t,!0),e(this.oBar).css(\"top\",a),e(this.oBar).css(\"height\",i),this.oThis||(this.oThis=e(document.getElementById(this.getId()))),this.oThis.attr(\"aria-valuenow\",t+\"%\"),this},s.prototype.onclick=function(e){this.firePress({}),e.preventDefault(),e.stopPropagation()},s.prototype.focus=function(){var e=this.getDomRef();e&&e.focus()},s});",
	"sap/ui/suite/VerticalProgressIndicatorRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define(function(){\"use strict\";var t={render:function(t,e){var i=t,r=e.getPercentage();(r<0||r==Number.NaN)&&(r=0),r>100&&(r=100);var a=Math.round(58*r/100),s=58-a,n=r.toString();i.write(\"<DIV\"),i.writeControlData(e),i.writeAttribute(\"tabIndex\",\"0\"),e.getTooltip_AsString()?i.writeAttributeEscaped(\"title\",e.getTooltip_AsString()):i.writeAttributeEscaped(\"title\",n),sap.ui.getCore().getConfiguration().getAccessibility()&&(i.writeAttribute(\"role\",\"progressbar\"),i.writeAccessibilityState(e,{valuemin:\"0%\"}),i.writeAccessibilityState(e,{valuemax:\"100%\"}),i.writeAccessibilityState(e,{valuenow:r+\"%\"})),i.writeAttribute(\"class\",\"sapUiVerticalProgressOuterContainer\"),i.write(\">\"),i.write(\"<DIV\"),i.writeAttribute(\"id\",e.getId()+\"-bar\"),i.writeAttribute(\"class\",\"sapUiVerticalProgressInnerContainer\"),i.addStyle(\"top\",s+\"px\"),i.addStyle(\"height\",a+\"px\"),i.writeClasses(),i.writeStyles(),i.write(\">\"),i.write(\"</DIV>\"),i.write(\"</DIV>\")}};return t},!0);"
}, "sap/ui/suite/library-preload");