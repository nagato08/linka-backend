import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/auth.decorators';
import { ProfileService } from './profile.service';
import {
  CreateProfileDto,
  UpdateLocationDto,
  UpdatePreferencesDto,
  UpdatePrivacyDto,
  UpdateProfileDto,
} from './dto/profile.dto';

@ApiTags('profile')
@ApiBearerAuth()
@Controller()
export class ProfileController {
  constructor(private readonly profiles: ProfileService) {}

  @Get('me/profile')
  @ApiOperation({
    summary: 'Consulter son profil',
    description:
      "Vue complète, avec le rapport de complétude et l'orientation déchiffrée — accessible au seul propriétaire.",
  })
  getOwn(@CurrentUser('sub') userId: string) {
    return this.profiles.getOwn(userId);
  }

  @Post('me/profile')
  @ApiOperation({
    summary: 'Créer son profil',
    description:
      "Un seul appel pour tout l'onboarding. La majorité est vérifiée côté serveur. Le compte passe en ACTIVE dès que le profil est exploitable.",
  })
  create(@CurrentUser('sub') userId: string, @Body() dto: CreateProfileDto) {
    return this.profiles.create(userId, dto);
  }

  @Patch('me/profile')
  @ApiOperation({ summary: 'Modifier son profil' })
  update(@CurrentUser('sub') userId: string, @Body() dto: UpdateProfileDto) {
    return this.profiles.update(userId, dto);
  }

  @Patch('me/location')
  @ApiOperation({ summary: 'Mettre à jour sa position' })
  updateLocation(
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateLocationDto,
  ) {
    return this.profiles.updateLocation(userId, dto.latitude, dto.longitude);
  }

  @Patch('me/preferences')
  @ApiOperation({ summary: 'Modifier ses filtres de recherche' })
  updatePreferences(
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdatePreferencesDto,
  ) {
    return this.profiles.updatePreferences(userId, dto);
  }

  @Patch('me/privacy')
  @ApiOperation({ summary: 'Modifier ses réglages de visibilité' })
  updatePrivacy(
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdatePrivacyDto,
  ) {
    return this.profiles.updatePrivacy(userId, dto);
  }

  @Get('profiles/:userId')
  @ApiOperation({
    summary: 'Consulter le profil public d’un autre utilisateur',
    description:
      "L'orientation n'est jamais exposée. Les photos non modérées non plus.",
  })
  getPublic(
    @CurrentUser('sub') viewerId: string,
    @Param('userId', ParseUUIDPipe) targetUserId: string,
  ) {
    return this.profiles.getPublic(viewerId, targetUserId);
  }

  @Get('interests')
  @ApiOperation({ summary: 'Référentiel des centres d’intérêt' })
  listInterests() {
    return this.profiles.listInterests();
  }

  @Get('prompts')
  @ApiOperation({ summary: 'Référentiel des questions de profil' })
  listPrompts() {
    return this.profiles.listPrompts();
  }
}
