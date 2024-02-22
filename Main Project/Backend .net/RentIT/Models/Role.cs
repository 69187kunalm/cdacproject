using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class Role
    {
        public Role()
        {
            Logins = new HashSet<Login>();
        }

        public int RoleId { get; set; }
        public string? Name { get; set; }

        public virtual ICollection<Login> Logins { get; set; }
    }
}
