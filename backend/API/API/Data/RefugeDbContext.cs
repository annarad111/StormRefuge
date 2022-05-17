using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using API;

namespace API.Data
{
    public class RefugeDbContext : IdentityDbContext<IdentityUser, IdentityRole, string>
    {
        public RefugeDbContext(DbContextOptions<RefugeDbContext> options)
    : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>()
                .HasData(
                new IdentityRole { Name = "Member", NormalizedName = "Member" },
                new IdentityRole { Name = "Admin", NormalizedName = "Admin" });
        }
    }
}