using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Identity.Migrations
{
    public partial class IdentityFixed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ZipCode",
                table: "Address",
                newName: "Zipcode");

            migrationBuilder.RenameColumn(
                name: "Sreet",
                table: "Address",
                newName: "Street");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Zipcode",
                table: "Address",
                newName: "ZipCode");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Address",
                newName: "Sreet");
        }
    }
}
