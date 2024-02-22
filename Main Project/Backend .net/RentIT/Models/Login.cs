using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class Login
    {
        public Login()
        {
            Users = new HashSet<User>();
        }

        public int LoginId { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int RoleId { get; set; }

        public virtual Role Role { get; set; } = null!;
        public virtual ICollection<User> Users { get; set; }
    }
}
