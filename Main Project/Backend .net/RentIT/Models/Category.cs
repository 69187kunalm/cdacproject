using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class Category
    {
        public Category()
        {
            Appliances = new HashSet<Appliance>();
        }

        public int CatId { get; set; }
        public string? Description { get; set; }
        public string? Type { get; set; }

        public virtual ICollection<Appliance> Appliances { get; set; }
    }
}
