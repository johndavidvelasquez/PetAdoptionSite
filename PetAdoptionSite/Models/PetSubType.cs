using System;
using System.Collections.Generic;

namespace PetAdoptionSite.Models
{
    public partial class PetSubType
    {
        public int Id { get; set; }
        public int PetTypeId { get; set; }
        public string Name { get; set; }
    }
}
