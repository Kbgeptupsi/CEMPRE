using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CEMPRE.Models
{
    public class Work
    {
        [Key]
        public int SkWork { get; set; }

        public string Title { get; set; }

        public string Desc { get; set; }

    }
}