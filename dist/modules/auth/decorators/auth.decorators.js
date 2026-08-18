"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = exports.Roles = exports.Public = exports.ROLES_KEY = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
exports.ROLES_KEY = 'roles';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (!user)
        return undefined;
    return data ? user[data] : user;
});
//# sourceMappingURL=auth.decorators.js.map