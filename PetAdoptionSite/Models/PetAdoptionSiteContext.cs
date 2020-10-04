using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PetAdoptionSite.Models
{
    public partial class PetAdoptionSiteContext : DbContext
    {
        public PetAdoptionSiteContext()
        {
        }

        public PetAdoptionSiteContext(DbContextOptions<PetAdoptionSiteContext> options)
            : base(options)
        {
        }

        public virtual DbSet<PetPost> PetPost { get; set; }
        public virtual DbSet<PetPostImage> PetPostImage { get; set; }
        public virtual DbSet<PetSubType> PetSubType { get; set; }
        public virtual DbSet<PetType> PetType { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=PetAdoptionSite;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PetPost>(entity =>
            {
                entity.Property(e => e.CityName).HasMaxLength(50);

                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.ProvinceKey).HasMaxLength(10);

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<PetPostImage>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Img)
                    .IsRequired()
                    .HasColumnName("img")
                    .HasColumnType("image");

                entity.Property(e => e.IsMain).HasColumnName("isMain");

                entity.Property(e => e.PostId).HasColumnName("postId");
            });

            modelBuilder.Entity<PetSubType>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<PetType>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description).HasMaxLength(1000);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Location).HasMaxLength(100);

                entity.Property(e => e.MobileNumber)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
