using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace RentIT.Models
{
    public partial class rentalappContext : DbContext
    {
        public rentalappContext()
        {
        }

        public rentalappContext(DbContextOptions<rentalappContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Appliance> Appliances { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Location> Locations { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Transaction> Transactions { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=mayur;database=rentalapp", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.34-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Appliance>(entity =>
            {
                entity.HasKey(e => e.AppId)
                    .HasName("PRIMARY");

                entity.ToTable("appliances");

                entity.HasIndex(e => e.UserId, "FK1lostw0javukw7vk6rjt2y3gc");

                entity.HasIndex(e => e.CatId, "FKpujs5k950c97n90q2wn5huuu7");

                entity.Property(e => e.AppId).HasColumnName("app_id");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.Image).HasColumnName("image");

                entity.Property(e => e.Isverified).HasColumnName("isverified");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Onrent).HasColumnName("onrent");

                entity.Property(e => e.Pricepermonth).HasColumnName("pricepermonth");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.Appliances)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("FKpujs5k950c97n90q2wn5huuu7");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Appliances)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK1lostw0javukw7vk6rjt2y3gc");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PRIMARY");

                entity.ToTable("category");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .HasColumnName("description");

                entity.Property(e => e.Type)
                    .HasMaxLength(255)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasKey(e => e.LocId)
                    .HasName("PRIMARY");

                entity.ToTable("location");

                entity.HasIndex(e => e.UserId, "UK_e5jwd37ob25i4e7jwownmu08w")
                    .IsUnique();

                entity.Property(e => e.LocId).HasColumnName("loc_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.City)
                    .HasMaxLength(255)
                    .HasColumnName("city");

                entity.Property(e => e.Pincode)
                    .HasMaxLength(255)
                    .HasColumnName("pincode");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Location)
                    .HasForeignKey<Location>(d => d.UserId)
                    .HasConstraintName("FKeua4vn06qu0iq9d32qnmuhqkl");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.RoleId, "FKb5k3dk3163hw6o0tti30xt8lx");

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKb5k3dk3163hw6o0tti30xt8lx");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.ToTable("transactions");

                entity.HasIndex(e => e.Touser, "FKay3kee9ym9ndum6k7mc4chlsy");

                entity.HasIndex(e => e.Doneby, "FKlnkx5q9vk6l2a6a9cs0k9w5t7");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.AppId).HasColumnName("app_id");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.Doneby).HasColumnName("doneby");

                entity.Property(e => e.Enddate).HasColumnName("enddate");

                entity.Property(e => e.Mode)
                    .HasMaxLength(255)
                    .HasColumnName("mode");

                entity.Property(e => e.Startdate).HasColumnName("startdate");

                entity.Property(e => e.Status)
                    .HasColumnType("bit(1)")
                    .HasColumnName("status");

                entity.Property(e => e.Touser).HasColumnName("touser");

                entity.Property(e => e.UpiId)
                    .HasMaxLength(255)
                    .HasColumnName("upi_id");

                entity.Property(e => e.Verified)
                    .HasColumnType("bit(1)")
                    .HasColumnName("verified");

                entity.HasOne(d => d.DonebyNavigation)
                    .WithMany(p => p.TransactionDonebyNavigations)
                    .HasForeignKey(d => d.Doneby)
                    .HasConstraintName("FKlnkx5q9vk6l2a6a9cs0k9w5t7");

                entity.HasOne(d => d.TouserNavigation)
                    .WithMany(p => p.TransactionTouserNavigations)
                    .HasForeignKey(d => d.Touser)
                    .HasConstraintName("FKay3kee9ym9ndum6k7mc4chlsy");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.LoginId, "FKr0shamf09rtlymwc9elplf8pf");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Active).HasColumnName("active");

                entity.Property(e => e.Contactno)
                    .HasMaxLength(255)
                    .HasColumnName("contactno");

                entity.Property(e => e.Fname)
                    .HasMaxLength(255)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(255)
                    .HasColumnName("lname");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.LoginId)
                    .HasConstraintName("FKr0shamf09rtlymwc9elplf8pf");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
