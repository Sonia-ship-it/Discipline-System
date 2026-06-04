import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AssignRoleDto, ToggleActiveDto } from './dto/assign-role.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Get('overview')
  getOverview() {
    return this.adminService.getSystemOverview();
  }

  @Get('staff')
  getAllStaff() {
    return this.adminService.getAllStaff();
  }

  @Patch('staff/:id/role')
  assignRole(@Param('id') id: string, @Body() dto: AssignRoleDto) {
    return this.adminService.assignRole(+id, dto.role);
  }

  @Patch('staff/:id/permissions')
  updatePermissions(@Param('id') id: string, @Body() dto: { permissions: string[] }) {
    return this.adminService.updatePermissions(+id, dto.permissions);
  }

  @Patch('staff/:id/active')
  toggleActive(@Param('id') id: string, @Body() dto: ToggleActiveDto) {
    return this.adminService.toggleActive(+id, dto.isActive);
  }
}
