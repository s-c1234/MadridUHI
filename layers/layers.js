ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32630").setExtent([427095.000000, 4466085.000000, 454365.000000, 4481985.000000]);
var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1 = new ol.format.GeoJSON();
var features_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1 = format_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1.readFeatures(json_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1.addFeatures(features_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1);
var lyr_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1, 
                style: style_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1,
                popuplayertitle: 'LST (LAND SURFACE TEMPRETURE) - ARTIS & CARNAHAM EQUATION (°C)',
                interactive: true,
    title: 'LST (LAND SURFACE TEMPRETURE) - ARTIS & CARNAHAM EQUATION (°C)<br />\
    <img src="styles/legend/LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1_0.png" /> 32-36 | COOLEST AREAS<br />\
    <img src="styles/legend/LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1_1.png" /> 36-40 | WARM<br />\
    <img src="styles/legend/LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1_2.png" /> 40-44 | HOT<br />\
    <img src="styles/legend/LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1_3.png" /> 44-48 | VERY HOT<br />\
    <img src="styles/legend/LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1_4.png" /> 48-52 | EXTREME HEAT<br />' });
var format_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2 = new ol.format.GeoJSON();
var features_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2 = format_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.readFeatures(json_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.addFeatures(features_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2);
var lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2, 
                style: style_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2,
                popuplayertitle: 'NDVI (NORMALISED DIFFERENCE VEGETATION INDEX)',
                interactive: true,
    title: 'NDVI (NORMALISED DIFFERENCE VEGETATION INDEX)<br />\
    <img src="styles/legend/NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2_0.png" /> -1 - 0 | NO VEGETATION<br />\
    <img src="styles/legend/NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2_1.png" /> 0 - 0.3 | URBAN & BARE SOIL<br />\
    <img src="styles/legend/NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2_2.png" /> 0.3 - 0.5 | SPARE VEGETATION<br />\
    <img src="styles/legend/NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2_3.png" /> 0.5 - 0.8 | MORDERATE VEGETATION<br />\
    <img src="styles/legend/NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2_4.png" /> 0.8 - 1 | DENSE VEGETATION<br />' });
var group_URBANHEATISLANDEFFECTPROJECTOFMADRID = new ol.layer.Group({
                                layers: [lyr_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1,lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2,],
                                fold: 'open',
                                title: 'URBAN HEAT ISLAND EFFECT PROJECT OF MADRID'});

lyr_WorldStreetMap_0.setVisible(true);lyr_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1.setVisible(true);lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,group_URBANHEATISLANDEFFECTPROJECTOFMADRID];
lyr_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1.set('fieldAliases', {'fid': 'fid', 'Class': 'Class', });
lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.set('fieldAliases', {'fid': 'fid', 'NDVI': 'NDVI', });
lyr_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1.set('fieldImages', {'fid': 'TextEdit', 'Class': 'TextEdit', });
lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.set('fieldImages', {'fid': 'TextEdit', 'NDVI': 'Range', });
lyr_LSTLANDSURFACETEMPRETUREARTISCARNAHAMEQUATIONC_1.set('fieldLabels', {'fid': 'hidden field', 'Class': 'header label - visible with data', });
lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.set('fieldLabels', {'fid': 'hidden field', 'NDVI': 'inline label - visible with data', });
lyr_NDVINORMALISEDDIFFERENCEVEGETATIONINDEX_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});