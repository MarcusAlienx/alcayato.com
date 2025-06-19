#!/bin/bash
# Script para limpiar archivos generados en la carpeta assets

echo "Eliminando archivos generados index-*.js y index-*.css en assets/"

rm -f assets/index-*.js
rm -f assets/index-*.css

echo "Limpieza completada."
