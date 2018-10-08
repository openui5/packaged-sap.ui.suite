jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "sap.ui.suite.library-preload",
	"modules": {
		"sap/ui/suite/library.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Core\",\"sap/ui/core/library\"],function(e,i){\"use strict\";sap.ui.getCore().initLibrary({name:\"sap.ui.suite\",version:\"1.52.20\",dependencies:[\"sap.ui.core\"],types:[\"sap.ui.suite.TaskCircleColor\"],interfaces:[],controls:[\"sap.ui.suite.TaskCircle\",\"sap.ui.suite.VerticalProgressIndicator\"],elements:[]});var r=sap.ui.suite;return r.TaskCircleColor={Red:\"Red\",Yellow:\"Yellow\",Green:\"Green\",Gray:\"Gray\"},r});",
		"sap/ui/suite/QuickViewUtils.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Control\",\"sap/ui/core/Element\"],function(t,e,i){\"use strict\";var n={createQuickView:function(t,e,i,n){var r=new sap.ui.model.odata.ODataModel(t,!1),s=new sap.ui.ux3.QuickView({firstTitle:\"{title}\",firstTitleHref:\"{titleLinkURL}\",type:\"{Thing/text}\",icon:\"{imageURL}\"});s.setModel(r),s.bindObject(\"/QuickviewConfigs(name='\"+e+\"',thingKey='\"+i+\"')\",{expand:\"Thing,QVAttributes/Attribute,QVActions/Action\"});var u=new o;return u.bindAggregation(\"items\",{path:\"QVAttributes\",factory:function(t,e){var i=new a(t,{label:\"{Attribute/label}\",link:\"{valueLinkURL}\",order:\"{order}\"});return i.bindProperty(\"value\",\"value\",n&&n[e.getProperty(\"Attribute/name\")]),i}}),s.addContent(u),s},createQuickViewData:function(t,e,i,n,r){var s=new sap.ui.model.odata.ODataModel(e,!1);t.removeAllContent(),t.setModel(s),t.bindProperty(\"firstTitle\",\"title\"),t.bindProperty(\"firstTitleHref\",\"titleLinkURL\"),t.bindProperty(\"type\",\"Thing/text\"),t.bindProperty(\"icon\",\"imageURL\"),t.bindObject(\"/QuickviewConfigs(name='\"+i+\"',thingKey='\"+n+\"')\",{expand:\"Thing,QVAttributes/Attribute,QVActions/Action\"});var u=new o;u.bindAggregation(\"items\",{path:\"QVAttributes\",factory:function(t,e){var i=new a(t,{label:\"{Attribute/label}\",link:\"{valueLinkURL}\",order:\"{order}\"});return i.bindProperty(\"value\",\"value\",r&&r[e.getProperty(\"Attribute/name\")]),i}}),t.addContent(u)},createDataSetQuickView:function(t,e,i,n,a){var o=new sap.ui.model.odata.ODataModel(t,!1);a&&o.setSizeLimit(a);var r=new sap.ui.ux3.QuickView({type:i,showActionBar:!1});return r.setModel(o),r.addContent(this._createDSContent(r,e,n)),r},createDataSetQuickViewData:function(t,e,i,n,a,o){var r=new sap.ui.model.odata.ODataModel(e,!1);o&&r.setSizeLimit(o),t.removeAllContent(),t.setType(n),t.setShowActionBar(!1),t.setModel(r),t.addContent(this._createDSContent(t,i,a))},_createDSContent:function(e,i,n){var a=new sap.ui.commons.layout.MatrixLayout,o=new sap.ui.commons.layout.MatrixLayoutRow;return t.each(n,function(t,e){var i;i=e.href?new sap.ui.commons.Link({text:e.value,href:e.href}):new sap.ui.commons.TextView({text:e.value});var n=new sap.ui.commons.layout.MatrixLayoutCell({content:[i]});n.addStyleClass(\"quickViewDS\"),o.addCell(n)}),a.bindAggregation(\"rows\",i,o),a}},a=i.extend(\"sap.ui.suite.hcm.QvItem\",{metadata:{properties:{label:\"string\",value:\"string\",link:\"string\",order:\"string\",type:\"string\"}}}),o=e.extend(\"sap.ui.suite.hcm.QvContent\",{metadata:{aggregations:{items:{type:\"sap.ui.suite.hcm.QvItem\",multiple:!0}}},init:function(){this._sorted=!1},exit:function(){this._oML&&this._oML.destroy()},renderer:function(t,e){t.write(\"<div\"),t.writeControlData(e),t.write(\">\"),t.renderControl(e._createQVContent(e)),t.write(\"</div>\")},_createQVContent:function(t){var e,i,n,a,o,r=new sap.ui.commons.layout.MatrixLayout({widths:[\"75px\"]}),s=t.getItems();this._oML&&this._oML.destroy(),t._sortItems(t);for(var u=0;u<s.length;u++)e=new sap.ui.commons.layout.MatrixLayoutRow,i=new sap.ui.commons.layout.MatrixLayoutCell({vAlign:\"Top\"}),n=new sap.ui.commons.Label({text:s[u].getLabel()+\":\"}),i.addContent(n),e.addCell(i),i=new sap.ui.commons.layout.MatrixLayoutCell,s[u].getLink()?(o=new sap.ui.commons.Link({text:s[u].getValue(),href:s[u].getLink()}),i.addContent(o)):(a=new sap.ui.commons.TextView({text:s[u].getValue()}),i.addContent(a)),e.addCell(i),r.addRow(e);return this._oML=r,r},_sortItems:function(e){if(!e._sorted){var i=e.removeAllAggregation(\"items\",!0);i.sort(function(t,e){return parseInt(t.getOrder(),10)-parseInt(e.getOrder(),10)}),t.each(i,function(t,i){e.addAggregation(\"items\",i,!1)}),e._sorted=!0}}});return n},!0);",
		"sap/ui/suite/TaskCircle.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Control\",\"sap/ui/core/EnabledPropagator\",\"./library\"],function(e,a,t,i){\"use strict\";var r=i.TaskCircleColor,o=a.extend(\"sap.ui.suite.TaskCircle\",{metadata:{library:\"sap.ui.suite\",properties:{value:{type:\"int\",group:\"Misc\",defaultValue:0},maxValue:{type:\"int\",group:\"Misc\",defaultValue:100},minValue:{type:\"int\",group:\"Misc\",defaultValue:0},color:{type:\"sap.ui.suite.TaskCircleColor\",group:\"Misc\",defaultValue:r.Gray}},associations:{ariaLabelledBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaLabelledBy\"},ariaDescribedBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaDescribedBy\"}},events:{press:{}}}});return t.call(o.prototype),o.prototype.init=function(){},o.prototype.onclick=function(e){this.firePress({}),e.preventDefault(),e.stopPropagation()},o.prototype.focus=function(){var e=this.getDomRef();e&&e.focus()},o});",
		"sap/ui/suite/TaskCircleRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Core\",\"./library\"],function(e,t,r){\"use strict\";var i=r.TaskCircleColor,a=function(){};return a.render=function(e,t){var r=e,a=t.getMinValue(),s=t.getMaxValue(),l=t.getValue();(a<0||a==Number.NaN)&&(a=0),(s<0||s==Number.NaN)&&(s=1),(l<0||l==Number.NaN)&&(l=0);var o=l.toString(),c=t.getColor(),d=\"sapUiTaskCircleColorGray\";switch(c){case i.Red:d=\"sapUiTaskCircleColorRed\";break;case i.Yellow:d=\"sapUiTaskCircleColorYellow\";break;case i.Green:d=\"sapUiTaskCircleColorGreen\";break;case i.Gray:d=\"sapUiTaskCircleColorGray\"}l<a&&(a=l),l>s&&(s=l);var n=24;a>10&&(n=32),a>100&&(n=46);var u=parseInt(Math.sqrt((l-a)/(s-a)*(3844-n*n)+n*n),10),p=(l+\"\").length,b=.55*u;p>1&&(b=u/p),r.write(\"<div\"),r.writeControlData(t),r.writeAttribute(\"tabIndex\",\"0\"),t.getTooltip_AsString()?r.writeAttributeEscaped(\"title\",t.getTooltip_AsString()):r.writeAttributeEscaped(\"title\",o),sap.ui.getCore().getConfiguration().getAccessibility()&&(r.writeAttribute(\"role\",\"progressbar\"),r.writeAccessibilityState(t,{valuemin:a}),r.writeAccessibilityState(t,{valuemax:s}),r.writeAccessibilityState(t,{valuenow:l})),r.writeAttribute(\"class\",\"sapUiTaskCircle \"+d),r.addStyle(\"width\",u+\"px\"),r.addStyle(\"height\",u+\"px\"),r.addStyle(\"line-height\",u+\"px\"),r.addStyle(\"font-size\",parseInt(b,10)+\"px\"),r.addStyle(\"border-radius\",u+\"px\"),r.addStyle(\"-moz-border-radius\",u+\"px\"),r.writeClasses(),r.writeStyles(),r.write(\">\"),r.write(l),r.write(\"</div>\")},a},!0);",
		"sap/ui/suite/VerticalProgressIndicator.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define([\"jquery.sap.global\",\"sap/ui/core/Control\",\"sap/ui/core/EnabledPropagator\",\"./library\"],function(e,t,r,a){\"use strict\";var i=t.extend(\"sap.ui.suite.VerticalProgressIndicator\",{metadata:{library:\"sap.ui.suite\",properties:{percentage:{type:\"int\",group:\"Misc\",defaultValue:null}},associations:{ariaLabelledBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaLabelledBy\"},ariaDescribedBy:{type:\"sap.ui.core.Control\",multiple:!0,singularName:\"ariaDescribedBy\"}},events:{press:{}}}});return r.call(i.prototype),i.prototype.setPercentage=function(t){var r=this.getPercentage();if(r==t)return this;this.oBar=e.sap.domById(this.getId()+\"-bar\"),r=t,(r<0||r==Number.NaN)&&(r=0),r>100&&(r=100);var a=Math.round(58*r/100),i=58-a;return this.setProperty(\"percentage\",t,!0),e(this.oBar).css(\"top\",i),e(this.oBar).css(\"height\",a),this.oThis||(this.oThis=e.sap.byId(this.getId())),this.oThis.attr(\"aria-valuenow\",t+\"%\"),this},i.prototype.onclick=function(e){this.firePress({}),e.preventDefault(),e.stopPropagation()},i.prototype.focus=function(){var e=this.getDomRef();e&&e.focus()},i});",
		"sap/ui/suite/VerticalProgressIndicatorRenderer.js": "/*!\n * UI development toolkit for HTML5 (OpenUI5)\n * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.\n * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.\n */\nsap.ui.define(function(){\"use strict\";var t={};return t.render=function(t,e){var i=t,r=e.getPercentage();(r<0||r==Number.NaN)&&(r=0),r>100&&(r=100);var a=Math.round(58*r/100),s=58-a,n=r.toString();i.write(\"<DIV\"),i.writeControlData(e),i.writeAttribute(\"tabIndex\",\"0\"),e.getTooltip_AsString()?i.writeAttributeEscaped(\"title\",e.getTooltip_AsString()):i.writeAttributeEscaped(\"title\",n),sap.ui.getCore().getConfiguration().getAccessibility()&&(i.writeAttribute(\"role\",\"progressbar\"),i.writeAccessibilityState(e,{valuemin:\"0%\"}),i.writeAccessibilityState(e,{valuemax:\"100%\"}),i.writeAccessibilityState(e,{valuenow:r+\"%\"})),i.writeAttribute(\"class\",\"sapUiVerticalProgressOuterContainer\"),i.write(\">\"),i.write(\"<DIV\"),i.writeAttribute(\"id\",e.getId()+\"-bar\"),i.writeAttribute(\"class\",\"sapUiVerticalProgressInnerContainer\"),i.addStyle(\"top\",s+\"px\"),i.addStyle(\"height\",a+\"px\"),i.writeClasses(),i.writeStyles(),i.write(\">\"),i.write(\"</DIV>\"),i.write(\"</DIV>\")},t},!0);"
	}
});