Array.prototype.filteredMap = function (mapCallback) {
    return this.map(mapCallback).filter(Boolean);
}
