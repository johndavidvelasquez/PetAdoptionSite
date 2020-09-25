using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PetAdoptionSite.Models
{
    public partial class PetAdoptionSite : DbContext
    {
        public PetAdoptionSite()
        {
        }

        public PetAdoptionSite(DbContextOptions<PetAdoptionSite> options)
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
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-6V2N32E\\SQLEXPRESS;Initial Catalog=PetAdoptionSite;Integrated Security=SSPI;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PetPost>(entity =>
            {
                entity.Property(e => e.CreatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

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

                entity.Property(e => e.UpdatedOn)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
