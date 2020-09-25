using System;
using System.Collections.Generic;

namespace PetAdoptionSite.Models
{
    public partial class PetPostImage
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public byte[] Img { get; set; }
        public bool IsMain { get; set; }
    }
}
