using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class User
    {
        public User()
        {
            Appliances = new HashSet<Appliance>();
            TransactionDonebyNavigations = new HashSet<Transaction>();
            TransactionTouserNavigations = new HashSet<Transaction>();
        }

        public int UserId { get; set; }
        public int? Active { get; set; }
        public string? Contactno { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
        public virtual Location? Location { get; set; }
        public virtual ICollection<Appliance> Appliances { get; set; }
        public virtual ICollection<Transaction> TransactionDonebyNavigations { get; set; }
        public virtual ICollection<Transaction> TransactionTouserNavigations { get; set; }
    }
}
