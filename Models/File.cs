using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class File
    {
        public int Id { get; set; }
        public string Uploader { get; set; }
        public string Location { get; set; }
        public string File_type { get; set; }
        public string Size { get; set; }
        public string Uploader_type { get; set; }
        public DateTime Upload_date { get; set; }
    }
}