<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MentorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Liste des mentors
 * @ApiResource(
 *      normalizationContext={"groups"={"GetAllMentors"}},
 *      collectionOperations={"get"},
 * itemOperations={
 *      "get"={
 *          "normalization_context"={"groups"={"GetOneMentor"}}
 *   }
 *  }
 * )
 * @ORM\Entity(repositoryClass=MentorRepository::class)
 */
class Mentor
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    
    /**
     * @ORM\Column(type="datetime")
     * @Groups({"GetOneMentor"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * Représente : Pourquoi souhaites-tu aider ?
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $why_help;

    /**
     * Représente : Que signifie, pour toi, être mentor ?
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"GetOneMentor"})
     */
    private $why_mentor;

    /**
     * @ORM\ManyToMany(targetEntity=SoftSkill::class, inversedBy="mentors")
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $soft_skills;

    /**
     * @ORM\ManyToMany(targetEntity=StackTech::class, inversedBy="mentors")
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $stack_techs;

    /**
     * @ORM\ManyToMany(targetEntity=Duration::class, inversedBy="mentors")
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $durations;

    /**
     * @ORM\ManyToMany(targetEntity=Target::class, inversedBy="mentors")
     * @Groups({"GetOneMentor"})
     */
    private $targets;

    /**
     * @ORM\ManyToMany(targetEntity=Format::class, inversedBy="mentors")
     * @Groups({"GetOneMentor"})
     */
    private $formats;

    /**
     * @ORM\OneToOne(targetEntity=User::class, mappedBy="mentor", cascade={"persist", "remove"})
     * @Groups({"GetOneMentor", "GetAllMentors"})
     */
    private $userId;

    public function __construct()
    {
        $this->soft_skills = new ArrayCollection();
        $this->stack_techs = new ArrayCollection();
        $this->durations = new ArrayCollection();
        $this->targets = new ArrayCollection();
        $this->formats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWhyHelp(): ?string
    {
        return $this->why_help;
    }

    public function setWhyHelp(?string $why_help): self
    {
        $this->why_help = $why_help;

        return $this;
    }

    public function getWhyMentor(): ?string
    {
        return $this->why_mentor;
    }

    public function setWhyMentor(?string $why_mentor): self
    {
        $this->why_mentor = $why_mentor;

        return $this;
    }

    /**
     * @return Collection|SoftSkill[]
     */
    public function getSoftSkills(): Collection
    {
        return $this->soft_skills;
    }

    public function addSoftSkill(SoftSkill $softSkill): self
    {
        if (!$this->soft_skills->contains($softSkill)) {
            $this->soft_skills[] = $softSkill;
        }

        return $this;
    }

    public function removeSoftSkill(SoftSkill $softSkill): self
    {
        $this->soft_skills->removeElement($softSkill);

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|StackTech[]
     */
    public function getStackTechs(): Collection
    {
        return $this->stack_techs;
    }

    public function addStackTech(StackTech $stackTech): self
    {
        if (!$this->stack_techs->contains($stackTech)) {
            $this->stack_techs[] = $stackTech;
        }

        return $this;
    }

    public function removeStackTech(StackTech $stackTech): self
    {
        $this->stack_techs->removeElement($stackTech);

        return $this;
    }

    /**
     * @return Collection|Duration[]
     */
    public function getDurations(): Collection
    {
        return $this->durations;
    }

    public function addDuration(Duration $duration): self
    {
        if (!$this->durations->contains($duration)) {
            $this->durations[] = $duration;
        }

        return $this;
    }

    public function removeDuration(Duration $duration): self
    {
        $this->durations->removeElement($duration);

        return $this;
    }

    /**
     * @return Collection|Target[]
     */
    public function getTargets(): Collection
    {
        return $this->targets;
    }

    public function addTarget(Target $target): self
    {
        if (!$this->targets->contains($target)) {
            $this->targets[] = $target;
        }

        return $this;
    }

    public function removeTarget(Target $target): self
    {
        $this->targets->removeElement($target);

        return $this;
    }

    /**
     * @return Collection|Format[]
     */
    public function getFormats(): Collection
    {
        return $this->formats;
    }

    public function addFormat(Format $format): self
    {
        if (!$this->formats->contains($format)) {
            $this->formats[] = $format;
        }

        return $this;
    }

    public function removeFormat(Format $format): self
    {
        $this->formats->removeElement($format);

        return $this;
    }

    public function getUserId(): ?User
    {
        return $this->userId;
    }

    public function setUserId(?User $userId): self
    {
        // unset the owning side of the relation if necessary
        if ($userId === null && $this->userId !== null) {
            $this->userId->setMentor(null);
        }

        // set the owning side of the relation if necessary
        if ($userId !== null && $userId->getMentor() !== $this) {
            $userId->setMentor($this);
        }

        $this->userId = $userId;

        return $this;
    }
}
