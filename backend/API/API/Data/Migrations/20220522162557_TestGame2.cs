using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class TestGame2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35a77363-2f1a-4777-b4be-63873424c65e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e2d48b2e-4b33-4688-91f6-301f348a5bdd");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "50f6e87c-18d0-4114-be57-c29021bb65bc", "77f44c9b-fa57-4cc9-afbb-d3b7c6ca18e3", "Member", "MEMBER" },
                    { "650cf059-8512-41f1-952d-5b965912ab73", "09edc6ae-e352-42c7-945e-8a60fe20bb75", "Admin", "ADMIN" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "50f6e87c-18d0-4114-be57-c29021bb65bc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "650cf059-8512-41f1-952d-5b965912ab73");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "35a77363-2f1a-4777-b4be-63873424c65e", "1383d0b6-5446-438b-aba0-126fe141a4b9", "Admin", "ADMIN" },
                    { "e2d48b2e-4b33-4688-91f6-301f348a5bdd", "263a635b-1ff4-44d9-a63f-cecad8514144", "Member", "MEMBER" }
                });
        }
    }
}
