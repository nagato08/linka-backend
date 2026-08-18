"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorPage = exports.PageInfo = exports.CursorPaginationDto = void 0;
exports.buildCursorPage = buildCursorPage;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CursorPaginationDto {
    cursor;
    limit = 20;
}
exports.CursorPaginationDto = CursorPaginationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Identifiant du dernier élément reçu',
        example: '0199aa00-0000-7000-8000-000000000000',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CursorPaginationDto.prototype, "cursor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Nombre d'éléments par page",
        minimum: 1,
        maximum: 100,
        default: 20,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Object)
], CursorPaginationDto.prototype, "limit", void 0);
class PageInfo {
    nextCursor;
    hasMore;
}
exports.PageInfo = PageInfo;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Curseur à passer pour obtenir la page suivante',
    }),
    __metadata("design:type", Object)
], PageInfo.prototype, "nextCursor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Vrai si une page suivante existe' }),
    __metadata("design:type", Boolean)
], PageInfo.prototype, "hasMore", void 0);
class CursorPage {
    data;
    pageInfo;
}
exports.CursorPage = CursorPage;
function buildCursorPage(rows, limit) {
    const hasMore = rows.length > limit;
    const data = hasMore ? rows.slice(0, limit) : rows;
    return {
        data,
        pageInfo: {
            hasMore,
            nextCursor: hasMore ? (data[data.length - 1]?.id ?? null) : null,
        },
    };
}
//# sourceMappingURL=pagination.dto.js.map